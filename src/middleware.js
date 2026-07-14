import { NextResponse } from 'next/server';

export function middleware(request) {
  // Only run on /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    
    // Allow the login page and api routes to bypass the check
    if (request.nextUrl.pathname.startsWith('/admin/login') || request.nextUrl.pathname.startsWith('/api/admin/login')) {
      return NextResponse.next();
    }

    // Check for our custom auth cookie
    const token = request.cookies.get('admin_auth_token');

    if (!token || token.value !== 'authenticated') {
      // If not authenticated, redirect to login page
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
