import { allPosts } from "@/.contentlayer/generated";
import PostList from "@/components/PostList";

export default function EssayPage() {
  return (
    <PostList
      title="Essay"
      allPosts={allPosts.filter((post) => post.category === "Essay")}
    />
  );
}
