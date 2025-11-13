import React from "react";
import "./Terms.css";

export default function Terms() {
  return (
    <section className="terms-section">
      <div className="terms-container">
        <h1>Terms & Conditions</h1>
        <p className="intro">
          Welcome to <strong>HimGym Fitness</strong>! By accessing or using our
          website, you agree to comply with the following Terms & Conditions.
          Please read them carefully before proceeding.
        </p>

        <div className="terms-content">
          <h2>1. Membership & Registration</h2>
          <p>
            All members must complete registration with accurate personal details.
            Membership is non-transferable and must be renewed before expiration.
            HimGym reserves the right to suspend or terminate memberships that
            violate gym policies.
          </p>

          <h2>2. Payment Policy</h2>
          <p>
            All payments for memberships, personal training, and services must be
            made in advance. We accept online payments, UPI, and cash. Fees are
            non-refundable except in cases of facility closure or service
            cancellation by HimGym.
          </p>

          <h2>3. Health & Safety</h2>
          <p>
            Members should consult a physician before starting any workout
            program. HimGym is not responsible for injuries caused by improper use
            of equipment or failure to follow trainer instructions.
          </p>

          <h2>4. Facility Rules</h2>
          <ul>
            <li>Proper gym attire and footwear are mandatory.</li>
            <li>Clean equipment after use with provided sanitizers.</li>
            <li>Re-rack weights and return equipment after every session.</li>
            <li>No outside trainers are allowed without management approval.</li>
          </ul>

          <h2>5. Privacy & Data Protection</h2>
          <p>
            We respect your privacy. Personal data is used solely for managing
            your membership, communication, and improving our services. We do not
            share your data with third parties without consent.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            HimGym Fitness shall not be held liable for any personal injury, loss,
            or theft of belongings within the premises. Members are advised to
            keep valuables safe.
          </p>

          <h2>7. Policy Updates</h2>
          <p>
            HimGym reserves the right to modify these Terms & Conditions at any
            time. Updates will be posted on this page and take effect immediately.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            For any questions, reach out at{" "}
            <strong>support@himgymfitness.in</strong> or visit our front desk.
          </p>
        </div>

        <div className="terms-footer">
          <p>© 2025 HimGym Fitness. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
