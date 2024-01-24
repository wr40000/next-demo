// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrateComponentNoSSR = dynamic(
//   () => {
//     return import("@/components/hydrateTest/page");
//   },
//   { ssr: false }
// );

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random()
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt=""
          fill
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrateComponentNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
