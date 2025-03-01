import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slugAsParams}>
            <h2>{post.title}</h2>
            <Image
              src={post.image || ""}
              alt={post.title}
              width={200}
              height={200}
            />
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
