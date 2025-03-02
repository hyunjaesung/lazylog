import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { parseISO, format } from "date-fns";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - stevy.dev`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image || "",
          width: 1200,
          height: 630,
        },
      ],
      url: `https://stevy.dev/${post.slugAsParams}`,
      siteName: "stevy.dev",
    },
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert w-full">
      <h1 className="mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500">
        {format(parseISO(post.date), "MMM dd, yyyy")}
      </div>
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
