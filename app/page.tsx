import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#08002e]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-[#3711b350] p-4 border-b border-[#4006FF] backdrop-blur-lg">
        <div className="flex items-center gap-2">
          <img className="w-14" src="/logo.svg" alt="cura logo" />
          <h1 className="text-[#360dbb] font-nunito text-3xl font-extrabold">
            CURA
          </h1>
        </div>

        <div className="flex gap-3">
          <a
            className="bg-[#3711b350] px-4 py-2 rounded-lg text-white"
            href="/auth/signup"
          >
            Sign Up
          </a>
          <a
            className="bg-[#3711b350] px-4 py-2 rounded-lg text-white"
            href="/auth/login"
          >
            Login
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mt-[1rem] w-full flex justify-center px-15">
        <div className="w-full  max-w-1280px bg-[#3711b350] border-2 border-[#4006FF] rounded-xl p-6">
          {/* content goes here */}
        </div>
      </div>
    </main>
  );
}
