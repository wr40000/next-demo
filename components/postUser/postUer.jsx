import Image from "next/image";
import styles from "./postUser.module.css";

const getPost = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
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

const PostUser = async ({ userId }) => {
  const userData = await getPost(userId);
  console.log(userData);
  return (
    <div className={styles.detail}>
      <div className={styles.userImg}>
        <Image
          src="https://th.bing.com/th/id/R.514811f42b5b45b6c6582deacf055e91?rik=FAcc45tBnhfV4w&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20181015%2f4655173_130107587000_2.jpg&ehk=PeYNUJX%2bIyZa8NlCbx1uEH%2b%2f91OVP1Y%2fvyQ8DK688Jg%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>name</span>
        <span className={styles.detailValue}>{userData.name}</span>
      </div>
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>email</span>
        <span className={styles.detailValue}>{userData.email}</span>
      </div>
    </div>
  );
};

export default PostUser;
