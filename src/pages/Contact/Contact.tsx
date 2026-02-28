import { useState, FormEvent } from "react";
import SEO from "@/components/SEO/SEO";
import PageTransition from "@/components/PageTransition/PageTransition";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import Footer from "@/components/Footer/Footer";
import styles from "./Contact.module.scss";
import project1 from "../../assets/ContactImg.webp";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <PageTransition>
      <SEO
        title="Contact Us | YW Architects – Get In Touch"
        description="Contact YW Architects for architecture, interior design, and urban planning projects. Office in Pune, India and Paris, France."
        keywords="contact YW Architects, architecture firm contact, Pune architects, hire architects"
      />

      <main className={styles.contactPage}>
        <div className={styles.heroArea}>
          <AnimatedSection>
            <h1 className={styles.contactTitle}>
              Contact We’d love to hear from you. Depending on your inquiry,
              you’ll find the contact details below. 
            </h1>
          </AnimatedSection>
        </div>

        <div className={styles.formSection}>
          <AnimatedSection>
            <div className={styles.formWrapper}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Schedule Now</h2>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className={styles.input}
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className={styles.input}
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Email ID*"
                    className={styles.input}
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    placeholder="Your Message"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>{" "}
              </form>

              <div className={styles.imageWrapper}>
                <img src={project1} alt="Contact" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>
            <AnimatedSection>
              <div className={styles.infoCard}>
                <h3>LET'S MEET</h3>
                <p>
                  Office No. 313, Fortuna Business Hub
                  <br />
                  Near Shivar Chowk, Pimple Saudagar
                  <br />
                  Pune – 411018, Maharashtra, India
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className={styles.infoCard}>
                <h3>LET'S TALK</h3>
                <a href="tel:02040038445">020 40038445</a>
                <a href="tel:+919623901901">+91 9623901901</a>
              </div>
            </AnimatedSection>
            {/* <AnimatedSection delay={0.2}>
              <div className={styles.infoCard}>
                <h3>CONNECT WITH US</h3>
                <p>
                  27 Eden walk eden centre,
                  <br />
                  Orchard, Paris, France
                </p>
              </div>
            </AnimatedSection> */}
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;
