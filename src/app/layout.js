import localFont from "next/font/local";
import "./globals.css";
import ProviderChakra from "@/components/ChakraProvider";
import { fira_sans, inter, roboto_mono } from "./fonts/fonts";

import ReduxProvider from "@/store/ReduxProvider";
import AlertComp from "@/components/Alert";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Projects Dashboard",
  description: "Dashboard for projects management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${fira_sans.variable} antialiased `}
      >
        <ReduxProvider>
          <ProviderChakra>
            {children}
          </ProviderChakra>
        </ReduxProvider>
      </body>
    </html>
  );
}
