import { allPosts } from "@/.contentlayer/generated";
import PostList from "@/components/PostList";

export default function TechPage() {
  return (
    <PostList
      allPosts={allPosts.filter((post) => post.category === "Tech")}
      title="Tech"
    />
  );
}
