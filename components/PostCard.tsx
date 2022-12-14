import Link from "next/link";
import { PostMeta } from "../utils/types";

export default function PostCard({
  title,
  slug,
  ...rest
}: PostMeta & { slug: string }) {
  return (
    <h2 className="uppercase text-xl md:text-xl font-medium mb-4">
      <Link legacyBehavior href={slug}>
        <a className="border-b-4 border-transparent hover:border-b-4 hover:border-black dark:hover:border-neutral-500 transition">
          {title}
        </a>
      </Link>
    </h2>
  );
}
