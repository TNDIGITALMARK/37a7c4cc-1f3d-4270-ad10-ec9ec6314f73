/**
 * Header Component
 * Matches design reference pixel-perfect styling
 */

'use client';

import Link from 'next/link';
import { Star, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(14,100%,60%)] rounded flex items-center justify-center">
              <Star className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-gray-900">HandyPro</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-[hsl(14,100%,60%)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-medium text-gray-700 hover:text-[hsl(14,100%,60%)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium text-gray-700 hover:text-[hsl(14,100%,60%)] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium text-gray-700 hover:text-[hsl(14,100%,60%)] transition-colors"
            >
              For Pros
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium text-gray-700 hover:text-[hsl(14,100%,60%)] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/marketplace"
              className="bg-[hsl(14,100%,60%)] text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[hsl(14,100%,55%)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
            >
              Find a Pro
            </Link>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
