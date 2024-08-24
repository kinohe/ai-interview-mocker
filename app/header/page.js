import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { Fragment } from "react";
// import Image from "next/image";
function Header() {
  return (
    <div class=" bg-gray-100 p-7">
      <nav class=" hidden sm:hidden md:block lg:block ">
        <ul class="flex items-center justify-center flex-wrap">
          {/* <li class="">
            <Image
              src="../../public/logos.svg"
              alt="Logos Ipsum Logo"
              width={50}
              height={50}
            />
          </li> */}
          <li class="-mb-px mr-7 ">
            <Link
              class="text-black hover:text-blue-700 hover:font-bold text-small"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li class="-mb-px mr-7 ">
            <Link
              class="text-black hover:text-blue-700 hover:font-bold text-small"
              href="/"
            >
              Question
            </Link>
          </li>
          <li class="-mb-px mr-7 ">
            <Link
              class="text-black hover:text-blue-700 hover:font-bold text-small"
              href="/"
            >
              Upgrade
            </Link>
          </li>
          <li class="-mb-px mr-7 ">
            <Link
              class="text-black hover:text-blue-700 hover:font-bold text-small"
              href="/"
            >
              How it works?
            </Link>
          </li>
        </ul>
      </nav>
      <UserButton />
    </div>
  );
}

export default Header;
