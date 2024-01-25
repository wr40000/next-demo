"use client";

import { handleGithubLogin } from "@/lib/action";

export default function ClientAuth() {
  return (
    <div>
        ClientAuth
        <form action={handleGithubLogin}>
        <button>login in github</button>
      </form>
    </div>
  );
}
