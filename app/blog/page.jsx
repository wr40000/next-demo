import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

const getPosts = async () => {
  // 模拟接口
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  // Next.js API 路由
  const res = await fetch(
    "http://127.0.0.1:3000/api/blog",
    // {
    //   next: { revalidate: 3600 },
    // }
    // {cache: "force-cache"}
    {cache: "no-store"}
  );
  if (!res.ok) {
    throw new Error("something Wrong...");
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
