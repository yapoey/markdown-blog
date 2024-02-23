import fs from "fs";
import matter from "gray-matter";
import getPostMetaData from "@/util/getPostMetadata";
import DocContentNav from "@/components/DocContentNav";
import DocContentItem from "@/components/DocCententItem";
import MarkdowContent from "@/components/MarkdowContent";
import { PostMetaData } from "@/interface/PostMetaData";

const getPostContent = (slug: string, folder: string) => {
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const getTitlesFromText = (text: string) => {
  const headerRegex = /^(#+)\s*(.*)/gm;
  const matches = [];
  let match;
  while ((match = headerRegex.exec(text)) !== null) {
    matches.push({ level: match[1].length, text: match[2] });
  }
  return matches;
};

export const generateStaticParams = async () => {
  const postPreview = getPostMetaData();
  const slugs: string[] = [];
  Object.keys(postPreview).forEach((key: string) =>
    postPreview[key].forEach((post: PostMetaData) => {
      slugs.push(post.slug);
    })
  );
  return slugs.map((post) => ({
    slug: post,
  }));
};

export default function posts(props: any) {
  const slug = props.params.slug;
  const folder = props.searchParams.folder;
  const matterResult = getPostContent(slug, folder);
  const titles = getTitlesFromText(matterResult.content);

  return (
    <section className="flex">
      <div className="flex-1 relative">
        <article className="border border-slate-600 p-4 rounded-md shadow-md bg-base-950 mr-10">
          <p className="font-bold text-yellow-light text-xl mb-1">
            {matterResult.data.title === undefined
              ? matterResult.data.slug
              : matterResult.data.title}
          </p>
          <p className="text-sm text-slate-400">{matterResult.data.date}</p>
          <p className="text-slate-500">{matterResult.data.subtitle}</p>
        </article>

        <article className="prose lg:prose-xl">
          <MarkdowContent>{matterResult.content}</MarkdowContent>
        </article>
      </div>
      <DocContentNav>
        <ul>
          {titles.map((title) => (
            <DocContentItem title={title} />
          ))}
        </ul>
      </DocContentNav>
    </section>
  );
}
