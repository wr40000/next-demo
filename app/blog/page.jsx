import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// const getPost = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//     // {cache: "force-cache"}
//     // {cache: "no-store"}
//   });
//   if (!res.ok) {
//     throw new Error("something Wrong...");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id} >
            <PostCard post={post}/>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
