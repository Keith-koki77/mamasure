"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 border-b border-purple-100 pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="Mama Sure" width={180} height={50} />

            <p className="mt-6 max-w-sm leading-8 text-gray-600">
              Empowering mothers-to-be with smart financial planning,
              trusted healthcare and expert maternal guidance.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-50 text-purple-700 transition hover:bg-purple-700 hover:text-white"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-6 font-bold text-gray-900">Platform</h3>
            <div className="flex flex-col gap-4 text-gray-600">
              <Link href="#" className="w-fit transition hover:text-purple-700">
                How It Works
              </Link>
              <Link href="#" className="w-fit transition hover:text-purple-700">
                Hospital Packages
              </Link>
              <Link href="#" className="w-fit transition hover:text-purple-700">
                Savings Plans
              </Link>
              <Link href="#" className="w-fit transition hover:text-purple-700">
                FAQs
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 font-bold text-gray-900">Company</h3>
            <div className="flex flex-col gap-4 text-gray-600">
              <Link href="#" className="w-fit transition hover:text-purple-700">
                About
              </Link>
              <Link href="#" className="w-fit transition hover:text-purple-700">
                Blog
              </Link>
              <Link href="#" className="w-fit transition hover:text-purple-700">
                Partners
              </Link>
              <Link href="#" className="w-fit transition hover:text-purple-700">
                Contact
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-3 font-bold text-gray-900">Stay in the loop</h3>
            <p className="mb-5 text-gray-600">
              Get updates and launch news in your inbox.
            </p>

            <div className="flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 p-1.5 pl-5">
              <Mail className="h-4 w-4 shrink-0 text-purple-400" />
              <input
                type="email"
                placeholder="Email address"
                className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-700 to-pink-500 text-white transition hover:scale-105">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-gray-500 lg:flex-row">
          <p>© 2026 Mama Sure. All rights reserved.</p>
          <p>
            Made with <span className="text-pink-500">♥</span> for mothers and
            families.
          </p>
        </div>
      </div>
    </footer>
  );
}