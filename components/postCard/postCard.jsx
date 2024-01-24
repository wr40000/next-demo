import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://th.bing.com/th/id/R.514811f42b5b45b6c6582deacf055e91?rik=FAcc45tBnhfV4w&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20181015%2f4655173_130107587000_2.jpg&ehk=PeYNUJX%2bIyZa8NlCbx1uEH%2b%2f91OVP1Y%2fvyQ8DK688Jg%3d&risl=&pid=ImgRaw&r=0"
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
        <p className={styles.desc}>{post.body}</p>
        <Link
          className={styles.link}
          href={`/blog/${post.id}`}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
