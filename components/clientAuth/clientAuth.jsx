"use client";

import { handleGithubLogin } from "@/lib/action";
import { useSession } from "next-auth/react";

export default function ClientAuth() {
  const { data: session, status } = useSession();
  console.log("session: ", session);
  return (
    <div>
        ClientAuth
        <form action={handleGithubLogin}>
        <button>login in github</button>
      </form>
    </div>
  );
}
