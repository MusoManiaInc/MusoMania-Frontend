import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import {NextSSRPlugin} from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";


export const metadata: Metadata = {
  title: {
    template: "%s | MusoMania",
    default: "MusoMania",
  },
  description: "Where Music Meets Opportunity",
  icons: {
    icon: "/icons/MusaManiaMonday.svg"
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ReactQueryProvider>
            {children}
            <Toaster />
        </ReactQueryProvider>
        
      </body>
    </html>
  );
}