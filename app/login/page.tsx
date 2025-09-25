"use client";

import { LoginForm } from "@/components/Login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm onLoginSuccess={() => router.push("/")} />
       
    </main>
  );
}