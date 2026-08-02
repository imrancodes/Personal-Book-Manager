"use client";

import Link from "next/link";
import Logo from "../common/Logo";
import { useForm } from "react-hook-form";
import { SignupFormData } from "@/src/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/src/lib/validations/auth";
import { signup } from "@/src/utlis/user-utlis";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "../common/loader";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signup(data);
      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);

      toast.error(error instanceof Error ? error.message : "Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-2 lg:px-8">
      <div className="mb-6 flex justify-center">
        <Logo />
      </div>

      <div className="w-full max-w-md rounded-md border border-zinc-200 bg-white p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-600">
            Create Account
          </h1>

          <p className="mt-2 text-zinc-500">
            Create your account to start managing your personal library.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-zinc-800"
            >
              Full Name
            </label>

            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="John Doe"
              className="h-12 w-full rounded-xs border border-zinc-300 px-4 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-100"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-800"
            >
              Email Address
            </label>

            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-12 w-full rounded-xs border border-zinc-300 px-4 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-100"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-800"
            >
              Password
            </label>

            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Create a password"
              className="h-12 w-full rounded-xs border border-zinc-300 px-4 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-100"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-xs bg-emerald-600 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-800 disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader className="h-5 w-5 fill-white text-emerald-300" />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
