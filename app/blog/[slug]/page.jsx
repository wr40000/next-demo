import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUer";
import { Suspense } from "react";

const getPost = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {
      next: { revalidate: 3600 },
      // {cache: "force-cache"}
      // {cache: "no-store"}
    }
  );
  if (!res.ok) {
    throw new Error("something Wrong...");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://th.bing.com/th/id/R.514811f42b5b45b6c6582deacf055e91?rik=FAcc45tBnhfV4w&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20181015%2f4655173_130107587000_2.jpg&ehk=PeYNUJX%2bIyZa8NlCbx1uEH%2b%2f91OVP1Y%2fvyQ8DK688Jg%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId} />
        </Suspense>
        <div className={styles.content}>
          {post.body}
          {/* 不要温顺地走入那良夜
          <br /> 日暮之时 年老之人应燃烧 呐喊 <br />
          怒斥 怒斥那光的消逝
          <br /> 智者将逝之时 明白黑暗有理
          <br /> 因其话语已无法迸发闪电
          <br /> 但他们 不温顺地走入那良夜 <br />
          善良之人 当最后一浪过去 <br />
          哭喊其微小之行本可在绿湾舞蹈生辉
          <br /> 他们怒斥 怒斥那光的消逝 */}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
