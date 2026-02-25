import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.scss';

const navItems = [
  { label: 'Home', path: '/#projects' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/disciplines' },
  { label: 'About Us', path: '/about' },
  { label: 'Articles', path: '/articles' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

const [showNav, setShowNav] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // detect direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNav(false); // scroll down → hide
    } else {
      setShowNav(true); // scroll up → show
    }

    // optional background effect
    setScrolled(currentScrollY > 50);

    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <>
    <nav
  className={`
    ${styles.navbar} 
    ${scrolled || isOpen ? styles.scrolled : ''} 
    ${!showNav ? styles.hidden : ''}
  `}
>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link to="/" className={styles.logo}>
              YW Architects
            </Link>
          </motion.div>

          <motion.div
            className={styles.desktopNav}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
           
          </motion.div>
 <motion.div
            className={styles.desktopNav}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          > <Link to="/contact" className={styles.contactBtn}>
              Contact Us
            </Link></motion.div>
          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link to={item.path} className={styles.mobileNavLink}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: navItems.length * 0.08 }}
            >
              <Link to="/contact" className={styles.mobileContactBtn}>
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
