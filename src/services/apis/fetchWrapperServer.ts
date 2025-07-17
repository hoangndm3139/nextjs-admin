import { cookies } from 'next/headers';

export const fetchWrapperServer: <T>(
  url: string,
  options: RequestInit
) => Promise<[T | undefined, Response | undefined]> = async (url, options) => {
  const _cookies = await cookies();
  const accessToken = _cookies.get('accessToken')?.value;

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Cookie: `accessToken=${accessToken}`,
    ...options.headers
  };

  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + url, {
    credentials: 'include',
    ...options,
    headers
  });

  if (response.ok) {
    return [(await response.json()).data, undefined];
  }

  return [undefined, await response.json()];
};

export const httpOnServer = {
  get: async <T>(
    url: string,
    options?: RequestInit
  ): Promise<[T | undefined, Response | undefined]> => {
    return fetchWrapperServer<T>(url, {
      method: 'GET',
      ...options
    });
  },

  post: async <T>(
    url: string,
    body?: any,
    options?: RequestInit
  ): Promise<[T | undefined, Response | undefined]> => {
    return fetchWrapperServer<T>(url, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options
    });
  },

  put: async <T>(
    url: string,
    body?: any,
    options?: RequestInit
  ): Promise<[T | undefined, Response | undefined]> => {
    return fetchWrapperServer<T>(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...options
    });
  },

  patch: async <T>(
    url: string,
    body?: any,
    options?: RequestInit
  ): Promise<[T | undefined, Response | undefined]> => {
    return fetchWrapperServer<T>(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      ...options
    });
  },

  delete: async <T>(
    url: string,
    options?: RequestInit
  ): Promise<[T | undefined, Response | undefined]> => {
    return fetchWrapperServer<T>(url, {
      method: 'DELETE',
      ...options
    });
  }
};
