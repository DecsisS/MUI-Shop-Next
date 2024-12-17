import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppContainer from "./AppContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next",
  description: "This is a NextApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <AppContainer>
          {children}
        </AppContainer>
      </body>
    </html>
  );
}
