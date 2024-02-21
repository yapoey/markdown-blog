import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/util/getPostMetadata";
import DocContentNav from "@/components/DocContentNav";
import { PostMetaData } from "@/interface/PostMetaData";

const getPostContent = (slug: string, folder: string) => {
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const getTitlesFromText = (text: string) => {
  const regex = /(?:^|##?\s)([^#\n]+)/g;

  let matches = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

// export const generateStaticParams = async () => {
//   const postPreview = getPostMetaData();
//   const slugs: string[] = [];
//   Object.keys(postPreview).forEach((key: string) =>
//     postPreview[key].forEach((post: PostMetaData) => {
//       slugs.push(post.slug);
//     })
//   );

//   // return posts.map((post) => ({
//   //   slug: post.slug,
//   // }));
//   return slugs;
// };

export default function posts(props: any) {
  const slug = props.params.slug;
  const folder = props.searchParams.folder;
  const matterResult = getPostContent(slug, folder);
  const titles = getTitlesFromText(matterResult.content);

  const handleOnTitle = (title: string) => {
    const stringWithHyphen = title.split(" ").join("-").toLowerCase();
    const element = document.getElementById(stringWithHyphen);

    if (element !== null) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id '${stringWithHyphen}' not found.`);
    }
  };

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
          <Markdown>{matterResult.content}</Markdown>
        </article>
      </div>
      <DocContentNav>
        <ul>
          {titles.map((title) => (
            <li className="hover:underline mb-4 text-sm text-slate-300 cursor-pointer">
              {title}
            </li>
          ))}
        </ul>
      </DocContentNav>
    </section>
  );
}
