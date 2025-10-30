"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mb-6 w-full">
      <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 py-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
        <div className="flex items-center gap-3 text-white">
          <Link href="/" className="flex items-center gap-2" aria-label="Go to home">
            <img src="/deployit-logo.png" alt="Deployit" className="h-6 sm:h-8" />
            <span className="mx-2 text-gray-300 flex items-center" aria-hidden="true">
              <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
                <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <img src="/sliitmozila-light-logo.png" alt="SLIIT Mozilla" className="h-6 sm:h-8 opacity-95" />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors">Home</Link>
            <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">About</a>
            <Link href="/challenges" className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors">Challenges</Link>
            <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Rules</a>
          </div>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex items-center justify-center size-10 rounded-lg text-white hover:bg-white/10 transition-colors p-2"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden mt-2 ${open ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-2 px-3">
          <Link href="/" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">Home</Link>
          <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">About</a>
          <Link href="/challenges" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">Challenges</Link>
          <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">Rules</a>
        </div>
      </div>
    </header>
  );
}
