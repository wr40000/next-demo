import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUer";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`,
  
  {"cache": "no-store"});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

// 也可以接受props参数
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  let post_clone = JSON.parse(JSON.stringify(post));
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img ? post.img : "/bc_2.jpg"}
          alt=""
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId} createAt={post_clone.createAt} />
        </Suspense>
        <div className={styles.desc}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
