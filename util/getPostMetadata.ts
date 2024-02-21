import matter from "gray-matter";
import fs from "fs";
import path from "path";
const getPostMetaData = () => {
  const root = "posts";
  const result = fs.readdirSync(path.resolve(root));
  const folders = result.filter((res) => {
    return fs.lstatSync(path.resolve(root, res)).isDirectory();
  });
  folders.unshift(root);

  let treeFiles: { [key: string]: any } = {};
  folders.forEach((f) => {
    const folderPath = f === root ? `${root}/` : `${root}/${f}/`;
    const tempFiles = fs.readdirSync(folderPath);
    const markdownPosts = tempFiles.filter((file) => file.endsWith(".md"));
    treeFiles[f] = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`${folderPath}/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        folder: folderPath.slice(0, -1),
        slug: fileName.replace(".md", ""),
      };
    });
  });

  // console.log(treeFiles);

  return treeFiles;
};

export default getPostMetaData;
