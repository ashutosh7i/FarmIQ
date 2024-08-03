import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="mr-6 lg:hidden" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden ml-auto" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/about"
            >
              About
            </Link>

            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
             href="/contactus"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          className="flex w-full items-center py-2 text-lg font-semibold"
          href="/"
        >
          Home
        </Link>
        <Link
          className="flex w-full items-center py-2 text-lg font-semibold"
          href="/about"
        >
          About
        </Link>

        <Link
          className="flex w-full items-center py-2 text-lg font-semibold"
          href="/contactus"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
