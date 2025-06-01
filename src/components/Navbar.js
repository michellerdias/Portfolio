"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const t = useTranslations("common");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (locale) => {
    const currentPath = pathname;
    const newPath = currentPath.replace(
      /^\/[a-z]{2}(-[A-Z]{2})?/,
      `/${locale}`
    );
    router.push(newPath);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-md shadow-sm"
          : "bg-surface/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-text-primary font-bold text-xl">
            MD.
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>

            {/* Language Switcher */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors"
                aria-label={t("language")}
              >
                <span className="text-sm font-medium">
                  {pathname.startsWith("/fr")
                    ? "FR"
                    : pathname.startsWith("/pt-BR")
                    ? "PT"
                    : "EN"}
                </span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Language Dropdown */}
              <div className="absolute right-0 mt-2 w-24 py-2 bg-surface/90 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("fr")}
                  className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
                >
                  Français
                </button>
                <button
                  onClick={() => handleLanguageChange("pt-BR")}
                  className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
                >
                  Português
                </button>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface-hover transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg
                  className="w-5 h-5 text-text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface-hover transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg
                  className="w-5 h-5 text-text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
            <button className="text-text-primary" onClick={toggleMobileMenu}>
              <div className="w-6 h-6 flex flex-col justify-around">
                <span
                  className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full h-screen bg-surface transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-8 space-y-6">
            <Link
              href="#about"
              className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Language Switcher */}
            <div className="flex flex-col space-y-4 pt-4 border-t border-border">
              <span className="text-text-secondary text-sm font-medium">
                {t("language")}
              </span>
              <div className="flex space-x-6">
                <button
                  onClick={() => {
                    handleLanguageChange("en");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    handleLanguageChange("fr");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
                >
                  FR
                </button>
                <button
                  onClick={() => {
                    handleLanguageChange("pt-BR");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
                >
                  PT
                </button>
              </div>
            </div>

            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-primary text-white px-8 py-3 rounded-md hover:bg-blue-700 text-lg font-medium text-center transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
