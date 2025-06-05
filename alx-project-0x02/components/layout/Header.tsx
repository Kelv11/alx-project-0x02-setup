import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/posts", label: "Posts" },
    { href: "/users", label: "Users" },
  ];

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-blue-200 transition-colors"
          >
            My Next.js App
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-blue-200 transition-colors duration-200 pb-1 ${
                  isActive(link.href)
                    ? "border-b-2 border-blue-200 text-blue-200"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden mt-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block hover:text-blue-200 transition-colors duration-200 py-2 ${
                isActive(link.href) ? "text-blue-200 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
