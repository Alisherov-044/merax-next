"use client";

import { redirect } from "next/navigation";

export function AuthCheck() {
  const isLoggedIn = false;

  if (!isLoggedIn) redirect("/login");
  return;
}
