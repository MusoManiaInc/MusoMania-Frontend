import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";


export const metadata: Metadata = {
  title: "MusoMania",
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
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}