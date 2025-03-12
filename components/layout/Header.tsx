"use client";

import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Hamburger Menu */}
        <button
          className="text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Center: Logo */}
        <Logo />

        {/* Right: Theme Toggle */}
        {mounted && (
          <button
            className="text-gray-700 dark:text-gray-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        )}
      </div>

      {/* Sidebar Menu Component */}
      <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
