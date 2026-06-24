import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { departments } from "@/data/departmentData";
import { useTransition } from "@/context/TransitionContext";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { path: "/", label: "Início", slug: null },
  { path: "/marketing", label: "Marketing", slug: "marketing" },
  { path: "/ti", label: "T.I", slug: "ti" },
  { path: "/eventos", label: "Eventos", slug: "eventos" },
  { path: "/rh", label: "RH", slug: "rh" },
  { path: "/podcast", label: "Podcast", slug: "podcast" },
  { path: "/pesquisa", label: "Pesquisa", slug: "pesquisa" },
];

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { triggerTransition } = useTransition();

  const handleMouseEnter = (slug: string | null) => {
    if (!slug) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredDept(slug);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredDept(null);
    }, 150);
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setHoveredDept(null);
    setIsOpen(false);
    if (path === "/") {
      window.location.href = "/";
    } else {
      triggerTransition(path);
    }
  };

  const handleServiceClick = (e: React.MouseEvent, deptSlug: string, serviceSlug: string) => {
    e.preventDefault();
    setHoveredDept(null);
    triggerTransition(`/${deptSlug}/servicos/${serviceSlug}`);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-4xl mx-auto glass-card rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-center relative">
        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-1">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.slug)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1"
              >
                <span className="relative z-10">{link.label}</span>
                {link.slug && (
                  <motion.span
                    animate={{ rotate: hoveredDept === link.slug ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </motion.span>
                )}
              </a>

              {/* Dropdown */}
              <AnimatePresence>
                {link.slug && hoveredDept === link.slug && departments[link.slug] && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(520px,calc(100vw-2rem))] glass-card-strong rounded-2xl p-6 z-[60]"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={() => handleMouseEnter(link.slug)}
                    onMouseLeave={handleMouseLeave}
                    style={{ background: "hsl(var(--popover))" }}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {/* Projects */}
                      <div>
                        <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                          Projetos
                        </h4>
                        <div className="space-y-1">
                          {departments[link.slug].projects.map((project, i) => (
                            <a
                              key={i}
                              href={link.path}
                              onClick={(e) => handleNavClick(e, link.path)}
                              className="block px-3 py-2 rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {project.title}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                          Serviços
                        </h4>
                        <div className="space-y-1 max-h-[250px] overflow-y-auto pr-1">
                          {departments[link.slug].services.map((service, i) => (
                            <a
                              key={i}
                              href={`/${link.slug}/servicos/${service.slug}`}
                              onClick={(e) => handleServiceClick(e, link.slug!, service.slug)}
                              className="block px-3 py-2 rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="hidden lg:flex items-center">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
        </div>

        {/* Mobile: Theme toggle and menu */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          <motion.button
            className="p-2 rounded-xl glass-card"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        className="lg:hidden mt-2 mx-auto max-w-4xl overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="glass-card rounded-2xl p-4 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05 }}
            >
              <a
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-muted"
              >
                {link.label}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
