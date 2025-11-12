import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benjamin Viulet - Free Wallpaper Gallery | Mirrors by Viulet",
  description: "Welcome to my world, where whispers become visions. Download free wallpapers from Benjamin Viulet's Mirror collection—gifts to begin your seeker's journey.",
  openGraph: {
    title: "Benjamin Viulet - Free Wallpaper Gallery | Mirrors by Viulet",
    description: "Welcome to my world, where whispers become visions. Download free wallpapers from Benjamin Viulet's Mirror collection—gifts to begin your seeker's journey.",
    images: [
      {
        url: "/images/viulet.png",
        width: 1200,
        height: 630,
        alt: "Benjamin Viulet - Mirrors by Viulet Wallpaper Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Viulet - Free Wallpaper Gallery | Mirrors by Viulet",
    description: "Welcome to my world, where whispers become visions. Download free wallpapers from Benjamin Viulet's Mirror collection—gifts to begin your seeker's journey.",
    images: ["/images/viulet.png"],
  },
  other: {
    "sa-verify": "ipc5artviuletc5",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};`,
          }}
        />
      </head>
      <body>
        {children}
        <Script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
