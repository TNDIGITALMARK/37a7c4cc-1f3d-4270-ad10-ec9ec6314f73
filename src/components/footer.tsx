/**
 * Footer Component
 * Matches design reference pixel-perfect styling with dark navy background
 */

import Link from 'next/link';
import { Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(210,29%,24%)] text-white py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[hsl(14,100%,60%)] rounded flex items-center justify-center">
                <Star className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold">HandyPro</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Connecting homeowners with trusted local professionals for all home service needs.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Careers - Blog
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[hsl(14,100%,60%)] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[hsl(14,100%,60%)] text-white px-4 py-2 rounded-lg font-medium text-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[hsl(14,100%,55%)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-300">
            © 2025 HandyPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
