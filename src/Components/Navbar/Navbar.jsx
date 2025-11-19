import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const links = [
    { label: "About", href: "#About" },
    { label: "Education", href: "#Education" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Footer" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 text-white max-w-7xl mx-auto">
        {/* Logo */}
        <span className="text-xl md:text-2xl font-bold tracking-wide text-[#ffb347] hover:opacity-90 transition">
          Biplab Biswas
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-gray-300 hover:text-[#ffb347] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#ffb347] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden text-white"
        >
          {isMenuOpen ? (
            <RiCloseLine size={28} />
          ) : (
            <RiMenu2Line size={28} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-[#0d1b2a]/95 backdrop-blur-md border-t border-white/10 shadow-xl md:hidden flex flex-col items-center gap-6 py-8 text-lg font-semibold text-gray-300 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-6"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#ffb347] transition duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
