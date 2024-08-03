"use client";

import Image from "next/image";
import hero from "@/public/hero.jpeg";
import { Inter } from "next/font/google";
import Form from "@/components/form";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <main className={`${inter.className} p-7 w-full max-w-lg mx-auto relative`}>
        <div className="w-full relative pt-[100%]">
          <Image
            src={hero}
            alt="profile"
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
          />
        </div>
        <h1 className="text-4xl pt-4 font-bold text-left">
          Welcome to Farm<span className="text-teal-400">IQ</span>
        </h1>
        <p className="text-md text-left pt-4">
          FarmIQ is an innovative app designed to maximize your agricultural
          yield. By simply entering parameters about your land our intelligent
          system recommends the most suitable crops to plant🌾.
        </p>
      </main>
      <Form />
    </>
  );
}
