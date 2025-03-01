import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";
type Props = {
  allPosts: Post[];
  title?: string;
};

export default function PostList({ allPosts, title = "" }: Props) {
  return (
    <div>
      {title && <h1 className="text-2xl font-bold">{`#${title}`}</h1>}
      <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8">
        {allPosts
          .toSorted(
            (a, b) => Number(parseISO(b.date)) - Number(parseISO(a.date))
          )
          .map((post) => (
            <article key={post._id}>
              <Link href={post.slugAsParams}>
                <div className="overflow-wrap-break-word">
                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                    <Image
                      className="object-cover h-full w-full"
                      src={post.image || ""}
                      alt={post.title}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
                    <h2 className="md:h-[64px] md:line-clamp-2 line-clamp-1 font-semibold tracking-tighter text-primary text-xl md:text-2xl">
                      {post.title}
                    </h2>
                    <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
                      {post.description}
                    </div>
                    <div className="prose italic tracking-tighter text-muted-foreground">
                      {format(parseISO(post.date), "MMM dd, yyyy")}
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
            </article>
          ))}
      </div>
    </div>
  );
}
