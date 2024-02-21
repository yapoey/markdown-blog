import { PostMetaData } from "@/interface/PostMetaData";
import Link from "next/link";
import getPostMetaData from "@/util/getPostMetadata";
export default function Home() {
  const postMetaData = getPostMetaData();

  const rootPostPreview = postMetaData["posts"].map((post: PostMetaData) => (
    <div
      className="border border-slate-600 p-4 rounded-md shadow-md bg-base-950"
      key={post.slug}
    >
      <Link href={`/posts/${post.slug}?folder=${post.folder}`}>
        <p className="font-bold text-yellow-light hover:underline">
          {post.title === undefined ? post.slug : post.title}
        </p>
        <p className="text-sm text-slate-400">{post.date}</p>
        <p className="text-slate-500">{post.subtitle}</p>
      </Link>
    </div>
  ));
  return (
    <div className="px-12 py-10">
      <h1 className="text-4xl mb-6">Popular Posts</h1>
      <p></p>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {rootPostPreview}
      </section>
    </div>
  );
}
