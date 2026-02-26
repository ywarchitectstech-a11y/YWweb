import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Footer.module.scss";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      {/* <motion.div
        className={styles.ctaBanner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={styles.ctaTitle}>Let's build something great together</h3>
        <a href="mailto:mail@ywarchitects.com" className={styles.ctaEmail}>
          mail@ywarchitects.com
        </a>
      </motion.div> */}

      <div className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h3>YW Architects</h3>
            <p>
              "Enhancing spaces with innovation and precision. YW Architects –
              where quality meets elegance."
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Other Links</h4>
            <Link to="/" className={styles.footerLink}>
              Home
            </Link>
            <Link to="/projects" className={styles.footerLink}>
              Projects
            </Link>
            {/* <Link to="/#disciplines" className={styles.footerLink}>
              Services
            </Link> */}
            <Link to="/#about" className={styles.footerLink}>
              About Us
            </Link>
            <Link to="/contact" className={styles.footerLink}>
              Contact Us
            </Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Location</h4>
            <p className={styles.footerText}>
              Office No. 313, Fortuna Business Hub
              <br />
              Near Shivar Chowk, Pimple Saudagar
              <br />
              Pune – 411018, Maharashtra, India
            </p>
            <br />
            <p className={styles.footerText}>
              Office No. 602, Fortuna Business Hub
              <br />
              Near Shivar Garden Signal, Pimple Saudagar
              <br />
              Pune – 411027, Maharashtra, India
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <a
              href="mailto:mail@ywarchitects.com"
              className={styles.footerContactItem}
            >
              mail@ywarchitects.com
            </a>
            <a href="tel:02040038445" className={styles.footerContactItem}>
              020 40038445
            </a>
            <a href="tel:+919623901901" className={styles.footerContactItem}>
              +91 9623901901
            </a>
            <div className={styles.socialContainer}>
              <p className={styles.heading}>Follow Us</p>

              <div className={styles.links}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.icon}
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.icon}
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>© 2026 YW Architects. All Rights Reserved.</span>
          <span>1988 - 2026</span>
          <div className={styles.bottomLinks}>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <span>By Haraay Design Studio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
