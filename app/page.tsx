import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { format, isAfter, parseISO } from "date-fns";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8">
      {allPosts
        .toSorted((a, b) => Number(parseISO(b.date)) - Number(parseISO(a.date)))
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slugAsParams}>
              <div className="overflow-wrap-break-word">
                <div className="aspect-[16/9] relative">
                  <Image
                    className="object-cover h-full w-full"
                    src={post.image || ""}
                    alt={post.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
                  <h2 className="font-semibold tracking-tighter text-primary text-xl md:text-2xl">
                    {post.title}
                  </h2>
                  <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
                    {format(parseISO(post.date), "MMM dd, yyyy")}
                  </div>
                  <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
                    {post.description}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {post.tags?.map((tag) => (
                      <div key={tag} className="mr-2 inline-block">
                        <a href={`/tag/${tag}`}>#{tag}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
    </div>
  );
}
