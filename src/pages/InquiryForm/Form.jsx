import { useState } from "react";
import styles from "./StallInquiryPage.module.scss";

const StallInquiryPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("STALL INQUIRY:", formData);

    // Reset form after submission
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Quick Inquiry</h1>
        <p className={styles.subtitle}>
          Share your details and our team will connect with you.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            className={styles.input}
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            required
          />

          <input
            className={styles.input}
            placeholder="Business Name"
            value={formData.businessName}
            onChange={(e) => handleChange("businessName", e.target.value)}
          />

          <input
            className={styles.input}
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />

          <input
            className={styles.input}
            type="tel"
            placeholder="Phone *"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
          />

          <textarea
            className={`${styles.input} ${styles.textarea}`}
            placeholder="Full Address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />

          <button type="submit" className={styles.submitBtn}>
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default StallInquiryPage;
