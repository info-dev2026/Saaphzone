import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * MAINTENANCE MODE MIDDLEWARE
 * ─────────────────────────────────────────────────────────────────
 * When MAINTENANCE_MODE is true, ALL public requests are redirected
 * to /maintenance. The maintenance page itself and static assets
 * are always allowed through so the page renders correctly.
 *
 * To DISABLE maintenance mode:
 *   1. Set MAINTENANCE_MODE = false  (or delete this file entirely)
 *   2. Commit & push → Vercel re-deploys automatically
 *
 * To re-enable: set it back to true and push again.
 * ─────────────────────────────────────────────────────────────────
 */
const MAINTENANCE_MODE = true;

/** Paths that must always be accessible (assets, internals) */
const BYPASS_PREFIXES = [
  "/maintenance",   // the page itself
  "/_next",         // Next.js build assets
  "/api",           // API routes (if any)
  "/favicon",       // favicons
  "/Saaphzone",     // logo image used on the maintenance page
  "/public",        // static public files
];

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Allow the maintenance page and all required assets through
  const isBypassed = BYPASS_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (isBypassed) return NextResponse.next();

  // Redirect everything else → /maintenance
  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";
  return NextResponse.redirect(maintenanceUrl);
}

export const config = {
  /*
   * Run middleware on ALL routes EXCEPT Next.js internals and static files.
   * This regex skips: _next/static, _next/image, .ico, .png, .jpg etc.
   */
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|otf)).*)",
  ],
};
