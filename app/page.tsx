import { allPosts } from "@/.contentlayer/generated";
import PostList from "@/components/PostList";

export default function Home() {
  return <PostList allPosts={allPosts} />;
}
