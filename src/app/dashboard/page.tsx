'use client';

import { logout } from "@/src/utlis/user-utlis";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Dashboard() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully.");
      router.replace("/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Logout failed");
    }
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
