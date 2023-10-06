import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href={"/"} className="flex z-40 font-semibold ">
            <span>Nura.</span>
          </Link>
          {/* TODO: Add mobile navbar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Sign in
              </LoginLink>
            </>
            <Link
              href="/dashboard"
              className="rounded-full transition-all flex items-center hover:bg-green-500 border border-green-500 text-green-500  hover:text-white py-1 px-4 "
            >
              Get started <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
