"use client"

import Link from "@/components/Link"

const Header = () => {
  return (
    <>
      <header className="synory-header">
        <div className="synory-inner">

          {/* LEFT: Logo + My Account + Icons */}
          <div className="synory-left">
            <Link href="/" className="synory-logo">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L4 8V20L14 26L24 20V8L14 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                <path d="M14 2V14M4 8L14 14M24 8L14 14" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5"/>
              </svg>
              <span className="synory-logo-text">Synory</span>
            </Link>

            <Link href="/" className="synory-account">
              My Account <sup>0</sup>
            </Link>

            <div className="synory-icon-group">
              <button className="synory-icon-btn" aria-label="Search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
              <button className="synory-icon-btn" aria-label="Cart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <span className="synory-cart-badge"/>
              </button>
            </div>
          </div>

          {/* CENTER: Navigation */}
          <nav className="synory-nav">
            <Link href="/" className="synory-nav-link">
              Home
            </Link>
            <Link href="/product" className="synory-nav-link">
              Shop & Products
            </Link>
            <Link href="/about" className="synory-nav-link">
              About
            </Link>
            <Link href="/contact" className="synory-nav-link">
              Contact
            </Link>
          </nav>

          {/* RIGHT: Purchase Now */}
          <a href="#" className="synory-purchase-btn">Purchase Now</a>

        </div>
      </header>
    </>
  )
}

export default Header