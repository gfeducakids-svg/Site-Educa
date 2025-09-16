
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Alfabetiza Kids - Método Chinês para Alfabetização Rápida',
  description: 'Descubra o Método Chinês que alfabetiza crianças 300% mais rápido, sem lágrimas ou pressão. +1.200 famílias aprovam. Garantia 7 dias. Apenas R$ 37,90.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="https://i.imgur.com/NW3rP0y.png" />
        
        {/* Preconnect and DNS Prefetch */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://i.imgur.com" />
        <link rel="preconnect" href="https://pay.kiwify.com.br" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />

        {/* Preload Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Preload Images */}
        <link rel="preload" as="image" href="https://i.imgur.com/NW3rP0y.png" />
        <link rel="preload" as="image" href="https://i.imgur.com/UVJxHiG.png" />
        <link rel="preload" as="image" href="https://i.imgur.com/lj6ZGBc.jpeg" />
        <link rel="preload" as="image" href="https://i.imgur.com/cdL6AlF.jpeg" />
        <link rel="preload" as="image" href="https://i.imgur.com/jCmtRJ1.jpeg" />

        {/* Prefetch Links */}
        <link rel="prefetch" href="https://pay.kiwify.com.br/S7SLFJY" />
        <link rel="prefetch" href="/oferta-especial" />
        
        <Script
          id="utmify-script"
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
        <Script id="back-redirect" strategy="afterInteractive">
          {`
            (function (b, c, d, e) {
              if (window.innerWidth > 768) return;
              var a = b.getElementsByTagName("head")[0];
              if (!a) {
                return;
              }
              var f = b.createElement("script");
              f.async = true;
              f.src = c;
              a.appendChild(f);
              window.cpa_settings = {
                id: d,
                subid: e,
                redirect: "/oferta-especial",
              };
            })(document, "https://cdn.utmify.com.br/scripts/back-redirect/latest-min.js", "689f78033fc84332e6dcb24d", "");
          `}
        </Script>
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
