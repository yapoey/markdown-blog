import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import getPostMetaData from "@/util/getPostMetadata";
import MainHeader from "@/components/MainHeader";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NTY Blogs",
  description: "Notion Theory Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const postMetaData = getPostMetaData();

  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <MainHeader />
        <main className="flex mt-1 flex-1">
          <SideNav postMetaData={postMetaData} />
          <section
            className="flex-1 p-4 overflow-y-auto"
            style={{
              maxHeight: "calc(100vh - 123px)",
              height: "calc(100vh - 123px)",
            }}
          >
            {children}
          </section>
        </main>
        <footer className="p-4 border-t border-base-600 text-center text-base-600">
          Developed by<span className="text-base-300"> Notion Theory</span>
        </footer>
      </body>
    </html>
  );
}
