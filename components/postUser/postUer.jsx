import Image from "next/image";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

const getPost = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    // {
    //   next: { revalidate: 3600 },
    // }
    // {cache: "force-cache"}
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("something Wrong...");
  }
  return res.json();
};

const PostUser = async (props) => {
  // console.log(props);
  const { userId, createAt } = props
  // console.log(createAt);
  const userData = await getUser(userId);
  return (
    <div className={styles.detail}>
      <div className={styles.userImg}>
        <Image
          // src="https://th.bing.com/th/id/R.514811f42b5b45b6c6582deacf055e91?rik=FAcc45tBnhfV4w&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20181015%2f4655173_130107587000_2.jpg&ehk=PeYNUJX%2bIyZa8NlCbx1uEH%2b%2f91OVP1Y%2fvyQ8DK688Jg%3d&risl=&pid=ImgRaw&r=0"
          src={userData.img ? userData.img : "/脚滑的猫咪.gif"}
          alt=""
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>name</span>
        <span className={styles.detailValue}>{userData.username}</span>
      </div>
      {createAt && <div className={styles.detailText}>
        <span className={styles.detailTitle}>Date</span>
        <span className={styles.detailValue}>{createAt.slice(0, 19)}</span>
      </div>}
    </div>
  );
};

export default PostUser;
