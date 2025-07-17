// import qs from "qs";

interface FetchOptions extends RequestInit {
  // A flag to indicate this is a retry request
  _retryRequest?: boolean;
  // A flag to indicate this is request that return a blob
  isResponseBlob?: boolean;
  // A flag to indicate the language of the request
}

// export const query = (query?: ParsedUrlQuery): string => {
//   return `${query && Object.keys(query).length ? `?${qs.stringify(query, { arrayFormat: "repeat" })}` : ""}`;
// };

// Handle session expiration by redirecting to the home page and resetting user state
// const handleEndSession = (errorData: any) => {
//   const lang = window.location.pathname.split("/")[1] as Locale;
//   window.location.replace(`/${lang}`);
//   user.getState().reset();
//   throw [errorData.message || "Session expired"];
// };

export const fetchWrapper: <T>(
  url: string,
  options: FetchOptions
) => Promise<T> = async (url, options = {}) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    ...options.headers
  };

  // Make a request with the token from the cookie to the FE server as a proxy
  const response = await fetch(window.origin + '/api-be/' + url, {
    ...options,
    credentials: 'include',
    headers
  });

  if (response.ok) {
    return options.isResponseBlob
      ? response.blob()
      : (await response.json()).data;
  }
  const errorData = await response.json();

  // If the request is unauthorized and the response status is not 401, throw an error with the message from the response
  if (response.status !== 401) {
    throw [
      errorData.error?.message || 'An error occurred',
      errorData.errors || []
    ];
  }

  // If the request is unauthorized and this is a retry request, handle the end session
  // if (options._retryRequest) {
  //   handleEndSession(errorData);
  // }

  // If the request is unauthorized and this is not a retry request, refresh the session
  // const refreshResponse = await fetch(window.origin + "/api/auth/v1/sessions/refresh", {
  //   method: "POST",
  //   credentials: "include",
  //   headers: {
  //     "Content-Type": "application/json; charset=utf-8",
  //   },
  // });

  // // If the refresh request fails, handle the end session
  // if (!refreshResponse.ok) {
  //   handleEndSession(errorData);
  // }

  // Retry the request with the new token
  return await fetchWrapper(url, {
    ...options,
    headers: {
      ...headers
    },
    _retryRequest: true
  });
};

export const http = {
  get: async <T>(url: string, options?: FetchOptions): Promise<T> => {
    return fetchWrapper<T>(url, {
      method: 'GET',
      ...options
    });
  },

  post: async <T>(
    url: string,
    body?: any,
    options?: FetchOptions
  ): Promise<T> => {
    return fetchWrapper<T>(url, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options
    });
  },

  put: async <T>(
    url: string,
    body?: any,
    options?: FetchOptions
  ): Promise<T> => {
    return fetchWrapper<T>(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...options
    });
  },

  patch: async <T>(
    url: string,
    body?: any,
    options?: FetchOptions
  ): Promise<T> => {
    return fetchWrapper<T>(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      ...options
    });
  },

  delete: async <T>(url: string, options?: FetchOptions): Promise<T> => {
    return fetchWrapper<T>(url, {
      method: 'DELETE',
      ...options
    });
  }
};
