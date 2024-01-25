// import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import ClientAuth from "@/components/clientAuth/clientAuth";

const LoginPage = async () => {
  console.log("****************************************");
  const session = await getServerSession(authOptions);
  console.log("session: ", session);
  // const session = await auth();
  // if (session?.user) {
  //   // filter out sensitive data before passing to client.
  //   session.user = {
  //     name: session.user.name,
  //     email: session.user.email,
  //     image: session.user.image,
  //   };
  // }

  return (
    // <SessionProvider session={session}>
    //   <ClientAuth />
    // </SessionProvider>
    <div>
      <h1>LoginPage</h1>
      <ClientAuth/>
    </div>
  );
};

export default LoginPage;
