import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="px-8 py-4 border-b-2 border-white">
      <div>
        <Link href="/">
          <h1 className="py-1">NotionTheory
            <span className="bg-yellow-light p-2 rounded-sm ml-1 text-black font-bold">BLOG
            </span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
