"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Product", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Customers", hasDropdown: false },
  { label: "Pricing", hasDropdown: false },
  { label: "New", hasDropdown: false, badge: true },
  { label: "Contact", hasDropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[56px] bg-[#08090a]/90 backdrop-blur-lg border-b border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1200px] h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-[#f5f5f7] no-underline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <span className="text-[14px] font-medium tracking-[-0.01em] text-[#f5f5f7]">Linear</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                className="flex items-center gap-[3px] text-[13.5px] text-[#8a8f98] hover:text-[#f5f5f7] transition-colors duration-200 no-underline"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} strokeWidth={1.5} />}
                {link.badge && (
                  <span className="inline-flex items-center justify-center w-[18px] h-[14px] rounded-[3px] bg-[#5e6ad2]/20 text-[9px] font-medium text-[#8a8f98] ml-[2px]">
                    NEW
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-block text-[13.5px] text-[#8a8f98] hover:text-[#f5f5f7] transition-colors duration-200 no-underline"
          >
            Log in
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-[32px] px-[14px] bg-[#f5f5f7] text-[#08090a] text-[13px] font-medium rounded-full hover:bg-[#e5e5e6] transition-all duration-200 no-underline"
          >
            Sign up
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-[32px] h-[32px] text-[#8a8f98]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h12M3 9h12M3 13h12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#121316] border-t border-[rgba(255,255,255,0.06)] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href="#" className="text-[14px] text-[#8a8f98] hover:text-[#f5f5f7] no-underline flex items-center gap-1">
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] text-[#5e6ad2] font-medium ml-1">NEW</span>
                  )}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
              <a href="#" className="text-[14px] text-[#8a8f98] hover:text-[#f5f5f7] no-underline">Log in</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
