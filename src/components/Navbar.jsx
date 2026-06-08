import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { theme } from "../theme/theme.jsx";

import logoLight from "../assets/optimus_light_logo2.png";
import logoDark from "../assets/optimus_dark_logo2.png";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inThrottle = useRef(false);

  const { themeMode, toggleTheme } = useTheme();
  const t = theme[themeMode];

  useEffect(() => {
    // Throttled scroll handler - limits updates to ~100ms intervals
    const handleScroll = () => {
      if (!inThrottle.current) {
        setScrolled(window.scrollY > 20);
        inThrottle.current = true;
        setTimeout(() => (inThrottle.current = false), 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `${t.navBg} backdrop-blur-xl border-b ${t.navBorder} shadow-lg`
          : `${t.navBg} backdrop-blur-md border-b ${t.navBorder}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        
        {/* LEFT SECTION - LOGO */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={themeMode === "light" ? logoLight : logoDark}
            alt="Optimus Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* CENTER SECTION - NAVIGATION */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative transition duration-300 ${
                  isActive
                    ? t.text
                    : `${t.muted} ${
                        themeMode === "light"
                          ? "hover:text-black"
                          : "hover:text-white"
                      }`
                }
                
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:transition-all
                after:duration-300
                hover:after:w-full
                
                ${isActive ? "after:w-full" : ""}
                `
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SECTION - CONSULTANCY BUTTON + THEME TOGGLE + MOBILE MENU */}
        <div className="flex items-center gap-4 ml-auto">
          
          {/* GET FREE CONSULTANCY BUTTON - DESKTOP */}
          <button
            onClick={() => navigate('/contact#consultation-form')}
            className="hidden lg:block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Get Free Consultation
          </button>

          {/* THEME TOGGLE - DESKTOP */}
          <button
            onClick={toggleTheme}
            className={`hidden md:block ${t.text} p-2 rounded-lg ${t.hover} transition`}
          >
            {themeMode === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>
          
          {/* MOBILE THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className={`
              md:hidden
              ${t.text}
              p-2.5
              rounded-lg
              ${t.hover}
              transition-all
              duration-300
              hover:scale-110
              hover:bg-blue-600/20
            `}
            aria-label="Toggle theme"
          >
            {themeMode === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`
              md:hidden
              ${t.text}
              p-2.5
              rounded-lg
              transition-all
              duration-300
              hover:bg-blue-600/20
              ${isOpen ? "bg-blue-600/20" : ""}
            `}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className={`
            md:hidden
            ${t.mobileMenu}
            backdrop-blur-xl
            border-t
            ${t.navBorder}
            animate-in
            fade-in
            slide-in-from-top-2
            duration-300
          `}
        >
          {/* Mobile Menu Header */}
          <div className="px-6 py-4 border-b border-gray-200/10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Navigation
            </p>
          </div>

          {/* Mobile Menu Links */}
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                    flex items-center justify-between
                    px-4 py-3
                    rounded-lg
                    transition-all
                    duration-300
                    group
                    ${
                      isActive
                        ? "bg-blue-600/20 text-blue-600 border border-blue-600/30"
                        : `${t.muted} hover:bg-white/5 hover:text-blue-600`
                    }
                    animate-in
                    fade-in
                    slide-in-from-left-4
                    duration-300
                    ease-out
                    `
                        .replace(/\s+/g, ' ')
                }
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="font-medium text-sm">{link.name}</span>
                <ChevronRight 
                  size={18} 
                  className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1"
                />
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="px-4 py-4 border-t border-gray-200/10 space-y-3">
            <button
              onClick={() => {
                navigate('/contact#consultation-form');
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Get Free Consultation
            </button>
            <button
              onClick={toggleTheme}
              className={`
                w-full
                flex
                items-center
                justify-center
                gap-2
                px-4
                py-3
                rounded-lg
                border
                border-gray-200/20
                ${t.text}
                hover:bg-white/5
                transition-all
                duration-300
                font-medium
                text-sm
              `}
            >
              {themeMode === "light" ? (
                <>
                  <Moon size={18} />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun size={18} />
                  Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;