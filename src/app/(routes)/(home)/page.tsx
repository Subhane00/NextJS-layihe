

const BANNER = "https://ik.imagekit.io/topsimmy/Synory/home-1-banner-1.webp?updatedAt=1761811372998"

const Home = () => {
  return (
    <>
      <div className="hero-wrapper">
        <section className="hero-section">

          {/* Background image */}
          <img className="hero-bg-img" src={BANNER} alt="hero background" />

          {/* Hero Text */}
          <div className="hero-content">
            <p className="hero-eyebrow">Crafting Comfort, Shaping Style</p>
            <h1 className="hero-title">Your Home, Our<br />Passion</h1>
            <p className="hero-desc">
              From modern minimalist to timeless classics, our collection offers
              something for every taste, transforming any space into a place
              you'll love.
            </p>
            <a href="#" className="hero-btn">
              Discover Now
              <span className="hero-btn-icon">
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="2" y1="7" x2="12" y2="7"/>
                  <polyline points="7 2 12 7 7 12"/>
                </svg>
              </span>
            </a>
          </div>

      
        
          {/* Blog Card */}
          <div className="hero-blog-card">
            <div className="blog-card-body">
              <h3 className="blog-card-title">60 Home Decor Ideas That Designers<br />Swear By</h3>
              <p className="blog-card-desc">
                Utilize drawers and shelves to store everyday office
                supplies and files you need access to. Credenzas with
                deep pull-out drawers can be fitted with file folder...
              </p>
              <a href="#" className="blog-card-btn">
                Exclusive
                <span className="blog-card-btn-icon">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="1" y1="5" x2="9" y2="5"/>
                    <polyline points="5 1 9 5 5 9"/>
                  </svg>
                </span>
              </a>
            </div>
            <div className="blog-card-image">
              <img className='kicik-img' src={BANNER} alt="blog preview" />
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default Home