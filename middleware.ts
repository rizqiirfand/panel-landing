// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function (req) {
    const { nextUrl, nextauth } = req;
    const isLoggedIn = !!nextauth.token;

    // Cek apakah user mencoba mengakses halaman auth
    const isAuthPage = nextUrl.pathname === "/login" || nextUrl.pathname === "/register";

    if (isAuthPage && isLoggedIn) {
      // 1. Cek prioritas pertama: ?callbackUrl= di URL browser
      let targetPath = nextUrl.searchParams.get("callbackUrl");

      // 2. Jika tidak ada, cek prioritas kedua: Halaman asal (Referer header)
      if (!targetPath) {
        const referer = req.headers.get("referer");
        if (referer) {
          const refererUrl = new URL(referer);
          // Ambil path-nya saja (misal: /profile atau /profile/edit)
          targetPath = refererUrl.pathname + refererUrl.search;
        }
      }

      // 3. Jika keduanya kosong (misal langsung ketik /login di tab baru), fallback ke /dashboard
      if (!targetPath || targetPath === "/login" || targetPath === "/register") {
        targetPath = "admin";
      }

      let allowedTarget: URL;

      if (targetPath.startsWith("http://") || targetPath.startsWith("https://")) {
        // Jika targetPath ternyata sebuah full URL, konversi dulu ke objek URL
        const parsedUrl = new URL(targetPath);

        // KEAMANAN: Pastikan domainnya sama dengan domain aplikasi kita (mencegah Open Redirect)
        if (parsedUrl.origin === nextUrl.origin) {
          allowedTarget = parsedUrl;
        } else {
          allowedTarget = new URL("/admin", nextUrl.origin);
        }
      } else {
        // Jika targetPath adalah relative path (ex: /admin/product)
        allowedTarget = new URL(targetPath, nextUrl.origin);
      }
      return NextResponse.redirect(allowedTarget);
    }
  },
  {
    callbacks: {
      // Izinkan semua request masuk ke fungsi middleware di atas untuk di-filter manual
      authorized: ({ req, token }) => {
        const { pathname } = req.nextUrl;
        if (pathname === "/login" || pathname === "/register") return true;
        return !!token; // Rute lain wajib login dulu
      },
    },
  },
);
export const config = { matcher: ["/admin/:path*", "/login", "/register"] };
