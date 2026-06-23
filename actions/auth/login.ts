import { signIn } from "next-auth/react";

export async function loginUser(email: string, password: string) {
  await signIn("credentials", {
    email,
    password,
  });
}
