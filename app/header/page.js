import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { Fragment } from "react";
// import Image from "next/image";
function Header() {
  return (
    <div className=" bg-gray-100 p-7 ">
      <nav className=" hidden sm:hidden md:block lg:block ">
        <ul className="flex items-center justify-center flex-wrap">
          <li className="-mb-px mr-7 ">
            <Link
              className="text-black hover:text-blue-700 hover:font-bold text-small"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li className="-mb-px mr-7 ">
            <Link
              className="text-black hover:text-blue-700 hover:font-bold text-small"
              href="/"
            >
              Question
            </Link>
          </li>
          <li className="-mb-px mr-7 ">
            <Link
              className="text-black hover:text-blue-700 hover:font-bold text-small"
              href="/"
            >
              Upgrade
            </Link>
          </li>
          <li className="-mb-px mr-7 ">
            <Link
              className="text-black hover:text-blue-700 hover:font-bold text-small"
              href="/"
            >
              How it works?
            </Link>
          </li>

          <li>
            <UserButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
