import { UserButton } from "@clerk/nextjs";
import { Brain } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

function Header() {
  return (
    <div>
      {/* <nav className=" hidden sm:hidden md:block lg:block ">
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

        </ul>
      </nav> */}
      <header className="px-4 lg:px-6 h-14 flex items-center mt-3">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6 mr-2" />
          <span className="font-bold">AI Mock Interviewer</span>
        </Link>
        <nav className="ml-48 flex gap-4 sm:gap-6 justify-center items-center ">
          <Link
            className="text-base font-medium hover:text-blue-700 hover:font-bold"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-base font-medium hover:text-blue-700 hover:font-bold"
            href="/questions"
          >
            Questions
          </Link>
          <Link
            className="text-base font-medium hover:text-blue-700 hover:font-bold"
            href="/upgrade"
          >
            Upgrade
          </Link>
          <Link
            className="text-base font-medium hover:text-blue-700 hover:font-bold"
            href="/how-it-works"
          >
            How It Works
          </Link>
        </nav>
        <li className="ml-auto">
          <UserButton />
        </li>
      </header>
    </div>
  );
}

export default Header;
