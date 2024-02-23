import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const root = 'posts'
const SideNavItem = (props) => {
  const [isOpen, setIsOpen] = useState(props.title === root)
  return (
    <div>
      <h3 className="side-nav-item active font-semibold text-lg pb-2 mt-2 cursor-pointer flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <span className="flex-1">{props.title}</span>
        <Image height='24' width='24' src='/images/arrow.svg' className={!isOpen === false && 'rotate-180'} />
      </h3>
      {isOpen && <ul className="side-nav-content">
        {props.posts.map((post) => (
          <li className="pl-3 pb-3 font-normal" key={post.slug}>
            <Link
              href={`/posts/${post.slug}?folder=${post.folder}`}
              className="text-sm text-white  hover:underline hover:text-opacity-50 truncate w-50 block "
            >
              {post.title === undefined ? post.slug : post.title}
            </Link>
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default SideNavItem;
