import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={post.img ? post.img : "/bc_2.jpg"}
            alt=""
            fill
            className={styles.img}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link
          className={styles.link}
          href={`/blog/${post.userId}`}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
