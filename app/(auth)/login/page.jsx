import styles from "./login.module.css";
import { auth } from "@/lib/auth";
import { handleGithubLogin } from "@/lib/action";
import LoginForm from "@/components/loginForm/loginForm";
 

const LoginPage = async () => {
  console.log("****************************************");
  const session = await auth();
  console.log("session: ", session);
  // setTimeout(() => {
  //   console.log("session: ", session);
  // }, 2000);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
