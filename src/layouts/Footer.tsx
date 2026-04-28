import Link from "@/components/Link"

const Footer = () => {
  return (
    <>
      <footer className="footer-wrap">

        <div className="footer-brands">
          {[
            "ASKO\nFURNITURE LTD.\nFINLAND",
            "yf Furniture",
            "globe\nfurniture",
            "Kronheims",
            "logitech",
            "AlBert\nDohnal Design",
            "Tylertone\nSUPPLY",
            "Kronheims",
             "yf Furniture"
          ].map((name, i) => (
            <div className="brand-card" key={i}>
              <span>{name}</span>
            </div>
          ))}
        </div>

     
        <div className="footer-main">
          <div className="footer-col">
            <p className="footer-col-title">Customer Service</p>
            <ul>
              <li><Link href="/">Find Store</Link></li>
              <li><Link href="/">About Synory</Link></li>
              <li><Link href="/">Press Lounge</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Features</p>
            <ul>
              <li><Link href="/">Services We Provide</Link></li>
              <li><Link href="/">On Sales</Link></li>
              <li><Link href="/">New Collections</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Subscribe to Our Newsletter</p>
            <p className="newsletter-desc">
              Subscribe to our newsletter for new products, trends and offers.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter email address.." />
              <button type="button">Subscribe</button>
            </div>
          </div>

          {/* Col 4 — Social */}
          <div className="footer-col">
            <p className="social-title">Join our Community</p>
            <div className="social-icons">
              {/* Facebook */}
              <a href="#" className="social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="social-btn" aria-label="X">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#c8a96e"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="social-btn" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#c8a96e"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">2026 © Synory Theme. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Cookies</a>
            <span>•</span>
            <a href="#">Terms & conditions</a>
            <span>•</span>
            <a href="#">Privacy policy</a>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer