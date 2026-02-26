import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./form.module.scss";

const EMAILJS_PUBLIC_KEY = "R9RlWQhtlkr2ztTEu";
const EMAILJS_SERVICE_ID = "service_vtwm30f";
const EMAILJS_TEMPLATE_INTERNAL = "template_6zhrqoh";

emailjs.init(EMAILJS_PUBLIC_KEY);

const YwContactPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    business: "",
    phone: "",
    email: "",
    project_type: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    title: "",
    message: "",
    error: false,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showToast = (title, message, error = false) => {
    setToast({ show: true, title, message, error });
    setTimeout(() => {
      setToast({ show: false, title: "", message: "", error: false });
    }, 5000);
  };

  const formatDate = () =>
    new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      showToast("Missing Fields", "Please fill all required fields.", true);
      return;
    }

    const payload = {
      ...formData,
      full_name: `${formData.first_name} ${formData.last_name}`,
      date: formatDate(),
      to_email: "mail@ywarchitects.com",
    };

    try {
      setLoading(true);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_INTERNAL,
        payload,
      );

      showToast(
        "✦ Enquiry Sent",
        "Thank you! We'll be in touch within 24–48 hours.",
      );

      setFormData({
        first_name: "",
        last_name: "",
        address: "",
        business: "",
        phone: "",
        email: "",
        project_type: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      showToast("Send Failed", "Something went wrong. Please try again.", true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logoBlock}>
          <img
            src="https://ywarchitectsimager.s3.ap-south-1.amazonaws.com/ywlogo-r.png"
            alt="YW Architects"
          />
          <div className={styles.logoName}>
            <span>YW</span> Architects
          </div>
          <div className={styles.logoTag}>Design · Build · Transform</div>
        </div>
        <div className={styles.headerRight}>New Client Enquiry</div>
      </header>

      <div className={styles.hero}>
        <h1>
          Begin Your <em>Vision</em>
          <br />
          With Us
        </h1>
        <p>
          Share your details and our team will personally review your project
          brief and reach out within 24–48 hours.
        </p>
      </div>

      <div className={styles.formCard}>
        <form onSubmit={handleSubmit}>
          <div className={styles.grid}>
            <input
              placeholder="First Name *"
              value={formData.first_name}
              onChange={(e) => handleChange("first_name", e.target.value)}
            />

            <input
              placeholder="Last Name *"
              value={formData.last_name}
              onChange={(e) => handleChange("last_name", e.target.value)}
            />

            <input
              className={styles.full}
              placeholder="Full Address *"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />

            <input
              className={styles.full}
              placeholder="Business / Company Name"
              value={formData.business}
              onChange={(e) => handleChange("business", e.target.value)}
            />

            <input
              placeholder="Phone *"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            <input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <select
              onChange={(e) => handleChange("project_type", e.target.value)}
            >
              <option value="">Project Type</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Interior Design</option>
              <option>Renovation</option>
              <option>Urban Planning</option>
            </select>

            <select onChange={(e) => handleChange("budget", e.target.value)}>
              <option value="">Budget Range</option>
              <option>Under ₹25 Lakhs</option>
              <option>₹25–₹50 Lakhs</option>
              <option>₹50 Lakhs–₹1 Cr</option>
              <option>₹1 Cr–₹5 Cr</option>
              <option>Above ₹5 Cr</option>
            </select>

            <textarea
              className={styles.full}
              placeholder="Project Brief / Message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          <div className={styles.submitRow}>
            <button type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send Enquiry →"}
            </button>
          </div>
        </form>
      </div>

      {toast.show && (
        <div className={`${styles.toast} ${toast.error ? styles.error : ""}`}>
          <div className={styles.toastTitle}>{toast.title}</div>
          <div>{toast.message}</div>
        </div>
      )}
    </div>
  );
};

export default YwContactPage;
