import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center h-screen pt-10">
      <section className="w-4/5 max-w-[500px] border border-blue-600 rounded-xl p-5 shadow-md shadow-blue-600">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold md:text-center text-blue-500">
            Sign up
          </h1>
          <p className="text-sm md:text-center text-blue-900">
            Already have a account
          </p>
          <Link
            href="#"
            className="underline underline-offset-2 md:text-center"
          >
            Login
          </Link>
        </div>
        <SignupForm />
      </section>
    </main>
  );
}
