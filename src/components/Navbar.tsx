import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Models', href: '#models' },
  { label: 'Areas', href: '#areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6">
        <a href="/" className="text-xl font-bold text-foreground tracking-tight">
          Fixur<span className="text-gradient">Device</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass-strong border-t border-border animate-fade-up">
          <div className="container-narrow py-4 px-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-medium mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
