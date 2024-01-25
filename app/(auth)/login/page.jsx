import { auth } from "@/lib/auth";
import ClientAuth from "@/components/clientAuth/clientAuth";

const LoginPage = async () => {
  console.log("****************************************");
  const session = await auth()
  console.log("session: ", session);

  return (
    <div>
      <h1>LoginPage</h1>
      <ClientAuth />
    </div>
  );
};

export default LoginPage;
