import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Alfabetiza Kids - Método Chinês para Alfabetização Rápida',
  description: 'Descubra o Método Chinês que alfabetiza crianças 300% mais rápido, sem lágrimas ou pressão. +1.200 famílias aprovam. Garantia 7 dias. Apenas R$ 27,90.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="https://i.imgur.com/DEZmyj9.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap" rel="stylesheet" />
        <link rel="prefetch" href="https://xn--educacrianas-tdb.site/ofertaimperdivel/" />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        ></Script>
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "689f78033fc84332e6dcb24d";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <Toaster />
        <Script id="exit-stopper" strategy="afterInteractive">
          {`
            window.redirectURL = "https://xn--educacrianas-tdb.site/ofertaimperdivel/";

            function exitStopper() {
              if (window.redirectURL) {
                window.location.href = window.redirectURL;
              }
            }

            history.pushState(null, null, location.href);
            window.addEventListener("popstate", function () {
              exitStopper();
            });
          `}
        </Script>
      </body>
    </html>
  );
}
