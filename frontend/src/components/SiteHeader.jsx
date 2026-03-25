import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { brand, modules } from "../mock";
import { Button } from "../components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

// Extracted for modularity and to prevent recreation on every render
const NavItem = ({ to, label, onClick, isActiveOverride }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 text-sm rounded-md transition-colors ${
        isActive || isActiveOverride
          ? "text-white bg-foreground/90"
          : "text-foreground/80 hover:text-foreground hover:bg-muted/30"
      }`
    }
    onClick={onClick}
    aria-current={isActiveOverride ? "page" : undefined}
  >
    {label}
  </NavLink>
);

export const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const headerRef = useRef(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // useLayoutEffect prevents visual jitter by calculating height before paint
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Handle click outside for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Handle Escape key for accessibility
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && dropdownOpen) {
        setDropdownOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [dropdownOpen]);

  // Trap scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const trainingModules = modules.filter((m) => m.id !== "custom");
  const isTrainingActive = location.pathname.includes("/training");

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 backdrop-blur-xl border-b border-border bg-background/60"
        style={{ fontFamily: brand.fonts.body }}
      >
        <div className="mx-auto max-w-screen-xl px-4 relative">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`${brand.name} home`}
              onClick={closeAllMenus}
            >
              <div
                className="h-8 w-8 rounded-md"
                style={{ backgroundColor: brand.colors.primary }}
                aria-hidden="true"
              />
              <div
                className="text-base font-semibold tracking-wide"
                style={{ color: brand.colors.slate }}
              >
                {brand.name}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <nav className="flex items-center gap-1" aria-label="Main">
                <NavItem to="/" label="Home" onClick={closeAllMenus} isActiveOverride={location.pathname === "/"} />
                <NavItem to="/services" label="Services" onClick={closeAllMenus} isActiveOverride={location.pathname === "/services"} />

                {/* Training Dropdown Trigger */}
                <div className="relative">
                  <button
                    ref={buttonRef}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      dropdownOpen || isTrainingActive
                        ? "text-white bg-foreground/90"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted/30"
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    aria-label="Training modules"
                  >
                    Training
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <NavItem to="/about" label="About" onClick={closeAllMenus} isActiveOverride={location.pathname === "/about"} />
                <NavItem to="/contact" label="Contact" onClick={closeAllMenus} isActiveOverride={location.pathname === "/contact"} />
              </nav>

              <Button
                className="ml-2 rounded-full"
                style={{
                  backgroundColor: brand.colors.primary,
                  color: brand.colors.white,
                }}
                onClick={() => {
                  closeAllMenus();
                  navigate("/contact");
                }}
                aria-label="Request training proposal"
              >
                Request Training Proposal
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu panel */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 animate-in slide-in-from-top-2 duration-200 h-[calc(100vh-4rem)] overflow-y-auto">
              <nav className="flex flex-col gap-2 pt-2" aria-label="Mobile navigation">
                <NavItem to="/" label="Home" onClick={closeAllMenus} isActiveOverride={location.pathname === "/"} />
                <NavItem to="/services" label="Services" onClick={closeAllMenus} isActiveOverride={location.pathname === "/services"} />
                
                {/* Mobile Training Accordion */}
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setMobileTrainingOpen(!mobileTrainingOpen)}
                    className={`flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                      isTrainingActive || mobileTrainingOpen
                        ? "text-white bg-foreground/90"
                        : "text-foreground/80 hover:bg-muted/30"
                    }`}
                    aria-expanded={mobileTrainingOpen}
                  >
                    <span>Training Modules</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileTrainingOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {mobileTrainingOpen && (
                    <div className="flex flex-col gap-1 pl-4 mt-1 border-l-2 border-border ml-3 animate-in slide-in-from-top-1">
                      {trainingModules.map((module) => (
                        <NavItem
                          key={module.id}
                          to={module.path}
                          label={module.title}
                          onClick={closeAllMenus}
                          isActiveOverride={location.pathname === module.path}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <NavItem to="/about" label="About" onClick={closeAllMenus} isActiveOverride={location.pathname === "/about"} />
                <NavItem to="/contact" label="Contact" onClick={closeAllMenus} isActiveOverride={location.pathname === "/contact"} />
                
                <Button
                  className="mt-4 rounded-full w-full"
                  style={{
                    backgroundColor: brand.colors.primary,
                    color: brand.colors.white,
                  }}
                  onClick={() => {
                    closeAllMenus();
                    navigate("/contact");
                  }}
                >
                  Request Proposal
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Dropdown panel – fixed, full width, GRID layout */}
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="fixed left-0 right-0 z-50 bg-background border-b border-border shadow-lg hidden md:block animate-in slide-in-from-top-1 duration-200"
          style={{ top: `${headerHeight}px` }}
          role="menu"
          aria-label="Training modules"
        >
          <div className="mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {trainingModules.map((module) => (
                <div key={module.id} role="none">
                  <Link
                    to={module.path}
                    className="block h-full select-none rounded-lg border border-border bg-card p-5 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={closeAllMenus}
                    role="menuitem"
                  >
                    <div className="text-base font-semibold leading-tight mb-2">
                      {module.title}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {module.blurb}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};