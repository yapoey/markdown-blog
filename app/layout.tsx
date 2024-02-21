import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import getPostMetaData from "@/util/getPostMetadata";
import MainHeader from "@/components/MainHeader";

import { PostMetaData } from "@/interface/PostMetaData";

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

  const postPreview = Object.keys(postMetaData).map((key: string) => (
    <div>
      <h3 className="font-semibold text-lg pb-2 mt-2">{key}</h3>
      <ul>
        {postMetaData[key].map((post: PostMetaData) => (
          <li className="pl-3 pb-3 font-normal">
            <Link
              href={`/posts/${post.slug}?folder=${post.folder}`}
              className="text-sm text-white  hover:underline hover:text-opacity-50 truncate w-50 block "
            >
              {post.title === undefined ? post.slug : post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <MainHeader />
        <main className="flex mt-1 flex-1">
          <section className="pt-8 pl-8 pb-8 mr-6" style={{ width: "240px" }}>
            {postPreview}
          </section>
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
