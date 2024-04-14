import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/providers/auth";
import ReactQueryProvider from "@/providers/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Computer accessories store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className="m-auto flex h-fit !min-h-screen w-full justify-center lg:min-w-[1024px] xl:min-w-[1280px] 2xl:min-w-[1536px] "
    >
      <body
        className={`${inter.className} flex h-full !min-h-screen max-w-screen-2xl flex-col lg:min-w-[1024px] xl:min-w-[1280px] 2xl:min-w-[1536px]`}
      >
        <AuthProvider>
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <div className="flex-1">{children}</div>
              <Toaster />
              <Footer />
            </ThemeProvider>
          </ReactQueryProvider>
          <GoogleTagManager gtmId="GTM-NF3QKZTL" />
        </AuthProvider>
      </body>
    </html>
  );
}
