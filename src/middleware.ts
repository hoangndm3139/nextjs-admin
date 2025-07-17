import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/auth/sign-in', '/auth/sign-up'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is public
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  //TODO: Implement auth check
  // Check if user is authenticated (you can implement your own auth check here)
  // const token = request.cookies.get('auth-token');

  // if (!token && !pathname.startsWith('/auth/')) {
  //   const signInUrl = new URL('/auth/sign-in', request.url);
  //   return NextResponse.redirect(signInUrl);
  // }

  return NextResponse.next();
}

// Export the matcher configuration
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - api-be (backend API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, public (metadata files)
     * - mockServiceWorker.js (MSW service worker)
     * - .well-known/appspecific/com.chrome.devtools.json (DevTools config)
     */
    '/((?!api|api-be|_next/static|_next/image|favicon.ico|icons|image|js|mockServiceWorker.js|sounds|videos|\\.well-known/appspecific/com\\.chrome\\.devtools\\.json).*)'
  ]
};
