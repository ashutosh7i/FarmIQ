import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/hero.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {};

export default function about({}: Props) {
  return (
    <div className="p-7 w-full max-w-lg mx-auto relative">
      <h1 className="text-3xl font-bold mb-4">About FarmIQ</h1>
      <div className="w-full relative pt-[100%]">
        <Image
          src={hero}
          alt="profile"
          objectFit="cover"
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        />
      </div>
      <p className="text-lg mt-4 mb-4">
        Welcome to FarmIQ🌾 - an innovative app designed to maximize your
        agricultural yield. By simply entering parameters about your land, our
        intelligent system recommends the most suitable crops to plant.
      </p>
      <h2 className="text-2xl font-bold mb-4">Options</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">General:</span> Enter basic information
          about your farm such as temperature, humidity, soil pH, and rainfall.
        </li>
        <li>
          <span className="font-bold">Advanced:</span> Provide detailed
          information including nitrogen levels in the soil, phosphorus,
          potassium, temperature, humidity, soil pH, and rainfall.
        </li>
      </ul>
      <p className="text-lg mb-4">
        The frontend of FarmIQ is built with Next.js, Tailwind CSS, and Shadcn,
        while the backend is powered by a Flask API deployed on Azure.
      </p>
      <p className="text-lg mb-4">
        The app utilizes a high-accuracy random forest ML model to predict the
        most suitable crops for your farm.
      </p>

      <p className="text-lg mb-4">
        This project was created by me during a 36-hour online hackathon named
        Jugaad Hacks.
      </p>
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Image
              src="https://github.com/ashutosh7i.png"
              alt="Aashutosh Soni"
              width={100} // Increased from 50 to 100
              height={100} // Increased from 50 to 100
              className="rounded-full"
            />
            <div>
              <CardTitle className="text-2xl">Aashutosh Soni</CardTitle>
              <CardDescription className="text-xl">
                Full-Stack Developer
              </CardDescription>{" "}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            Hi👋🏻 i am Aashutosh Soni, a full-stack developer with a passion for
            creating innovative solutions. Feel free to reach out to me for any
            queries or collaborations.
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-4">
            <Button asChild>
              <Link
                href="https://www.linkedin.com/in/ashutosh7i/"
                target="_blank"
              >
                Linkedin
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://github.com/ashutosh7i" target="_blank">
                Github
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://ashutosh7i.dev" target="_blank">
                Portfolio
              </Link>
            </Button>
            <Button asChild>
              <Link href="mailto:i@ashutosh7i.dev" target="_blank">
                Contact me📩
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
