import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const sid = request.cookies.get('sid')?.value
  
  if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup') || request.nextUrl.pathname === '/' || request.nextUrl.pathname.startsWith('/api') || request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  if (!sid) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}


