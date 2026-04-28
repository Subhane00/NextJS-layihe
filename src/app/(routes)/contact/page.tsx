const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        
        <div className="contact-info">

          <div className="info-div">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              Head Office 187 Rogers dr <br />
              STOUGHTON, MA 02072 <br />
              United States
            </p>
          </div>

          <div className="info-div">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              Head Office 187 Rogers dr <br />
              STOUGHTON, MA 02072 <br />
              United States
            </p>
          </div>

          <div className="info-div">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              Head Office 187 Rogers dr <br />
              STOUGHTON, MA 02072 <br />
              United States
            </p>
          </div>

        </div>

        <div className="contact-message">
            <form action="#">
                <div className="name-box">
                    <p>Your Name</p>
                    <input type="text" />
                </div>
                  <div className="name-box">
                    <p>Your Email</p>
                    <input type="text" />
                </div>
                  <div className="name-box">
                    <p>Subject</p>
                    <input type="text" />
                </div>
                <div className="name-box">
                    <p>Your message (optional) </p>
                    <textarea></textarea>
                </div>
            </form>

        </div>

      </div>
    </div>
  )
}

export default Contact