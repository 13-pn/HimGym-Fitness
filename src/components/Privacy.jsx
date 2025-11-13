import React from "react";
import "./Privacy.css";

export default function Privacy() {
  return (
    <section className="privacy-section">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="intro">
          At <strong>HimGym Fitness</strong>, we value your trust and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data when you use our services.
        </p>

        <div className="privacy-content">
          <h2>1. Information We Collect</h2>
          <p>We may collect the following information from you:</p>
          <ul>
            <li>Personal details such as your name, phone number, and email address.</li>
            <li>Billing and payment information for memberships and services.</li>
            <li>Health-related details provided voluntarily for training programs.</li>
            <li>Usage data from our website (e.g., page visits, preferences).</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>Your data helps us improve our services and provide a better gym experience:</p>
          <ul>
            <li>To manage memberships, schedules, and billing.</li>
            <li>To send updates, offers, and fitness-related content.</li>
            <li>To enhance our website and user experience.</li>
            <li>To ensure health and safety compliance during workouts.</li>
          </ul>

          <h2>3. Data Protection & Security</h2>
          <p>
            We use secure systems and encryption methods to safeguard your
            personal information. Only authorized staff can access member data,
            and all details are stored securely.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell or rent your personal data. We may share information
            only with trusted partners who help us deliver our services — for
            example, payment gateways or IT service providers — under strict
            confidentiality agreements.
          </p>

          <h2>5. Cookies Policy</h2>
          <p>
            Our website uses cookies to enhance your browsing experience and
            track anonymous usage statistics. You can disable cookies in your
            browser settings if preferred.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access or request a copy of your personal data.</li>
            <li>Request corrections or deletion of inaccurate information.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
          </ul>

          <h2>7. Updates to This Policy</h2>
          <p>
            HimGym Fitness may update this Privacy Policy periodically. Any
            changes will be posted on this page with the updated effective date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            For questions regarding this Privacy Policy, contact us at{" "}
            <strong>privacy@himgymfitness.in</strong> or visit our help desk.
          </p>
        </div>

        <div className="privacy-footer">
          <p>© 2025 HimGym Fitness. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
