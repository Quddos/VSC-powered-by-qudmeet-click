'use client';

import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';
import AdminLogout from '@/components/admin-logout';

interface HeaderProps {
  title?: string;
  isAdmin?: boolean;
  isStudent?: boolean;
  role?: string;
  showAuth?: boolean;
}

export default function Header({
  title = 'Varsity Scholars Consult',
  isAdmin = false,
  isStudent = false,
  role = '',
  showAuth = true,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo bg.png"
              alt="Varsity Scholars Consult"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-800 truncate max-w-[180px] sm:max-w-none">
              {title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/admin-auth"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Admin Portal
                </Link>
              </li>

              {isAdmin && (
                <>
                  <li>
                    <Link
                      href="/admin/dashboard"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/applications"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Applications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/payments"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Payments
                    </Link>
                  </li>
                  {role === 'super_admin' && (
                    <li>
                      <Link
                        href="/admin/users"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        Users
                      </Link>
                    </li>
                  )}
                </>
              )}

              {isStudent && (
                <>
                  <li>
                    <Link
                      href="/student/dashboard"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student/apply"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Apply
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student/payments"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Payments
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {!isAdmin && !isStudent && showAuth && (
            <>
              <Link
                href="/sign-in"
                className="text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base"
              >
                Sign Up
              </Link>
            </>
          )}

          {isAdmin && <AdminLogout />}
          {isStudent && <UserButton />}

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 border-t border-gray-100 pt-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/admin-auth"
                className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin Portal
              </Link>
            </li>

            {isAdmin && (
              <>
                <li>
                  <Link
                    href="/admin/dashboard"
                    className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/applications"
                    className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/payments"
                    className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Payments
                  </Link>
                </li>
                {role === 'super_admin' && (
                  <li>
                    <Link
                      href="/admin/users"
                      className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Users
                    </Link>
                  </li>
                )}
              </>
            )}

            {isStudent && (
              <>
                <li>
                  <Link
                    href="/student/dashboard"
                    className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/student/apply"
                    className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Apply
                  </Link>
                </li>
                <li>
                  <Link
                    href="/student/payments"
                    className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Payments
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
