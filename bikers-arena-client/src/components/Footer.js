import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <h2>
              BIKERS <span>ARENA</span>
            </h2>

            <p>
              Ride with passion. Ride with confidence. Discover premium riding
              gear, accessories and everything a biker needs.
            </p>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ◎
              </a>
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>QUICK LINKS</h3>

            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3>PRODUCTS</h3>

            <ul>
              <li>
                <Link to="/products/jackets">Jackets</Link>
              </li>

              <li>
                <Link to="/products/gloves">Gloves</Link>
              </li>

              <li>
                <Link to="/products/helmets">Helmets</Link>
              </li>

              <li>
                <Link to="/products/boots">Boots</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section footer-contact">
            <h3>CONTACT US</h3>

            <p>📍 Mumbai, Maharashtra, India</p>

            <p>📞 +91 93215 20131</p>

            <p>✉ bikersarena@gmail.com</p>

            <p>🕒 Mon - Sat: 10:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © 2026 <strong>Bikers Arena</strong>. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;