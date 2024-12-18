"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-bold text-xl">
          <Link href="/">E-Commerce-Website-Interface-Kit</Link>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-white hover:text-gray-200 transition font-medium"
          >
            Home
          </Link>
          <Link
            href="../Usethestyles"
            className="text-white hover:text-gray-200 transition font-medium"
          >
            Use the Styles
          </Link>
          <Link
            href="../Checkthelayouts"
            className="text-white hover:text-gray-200 transition font-medium"
          >
            Check the layouts

          </Link>
          <Link
            href="../Usethecontentblocks"
            className="text-white hover:text-gray-200 transition font-medium"
          >
            Use the content blocks

          </Link>
          <Link
            href="../Usethecomponents"
            className="text-white hover:text-gray-200 transition font-medium"
          >
          Use the components

          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-blue-600 px-4 py-4">
        <Link
          href="/"
          className="block text-white hover:text-gray-200 transition py-2"
        >
          Home
        </Link>
        <Link
          href="../Usethestyles"
          className="block text-white hover:text-gray-200 transition py-2"
        >
          Use the styles
        </Link>
        <Link
          href="../Checkthelayouts"
          className="block text-white hover:text-gray-200 transition py-2"
        >
          Check the layouts
        </Link>
        <Link
          href="../Usethecontentblocks"
          className="block text-white hover:text-gray-200 transition py-2"
        >
          Use the content blocks
        </Link>
        <Link
          href="../Usethecomponents"
          className="block text-white hover:text-gray-200 transition py-2"
        >
          Use the components
        </Link>
      </div>
    </nav>
  );
}
