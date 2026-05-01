const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        
        <div className="contact-info">
        <p><b>Contact Info</b></p>
          <div className="info-div">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              Head Office 187 <br />
              
             <span style={{color: ' #E5CDA6'}}> United States</span>
            </p>
          </div>

          <div className="info-div">
           <i className="fa-brands fa-weixin"></i>
            <p>
              Chat with us<br />
            <span style={{color: ' #E5CDA6'}}>We are here 24/7 to help</span><br />
             
            </p>
          </div>

          <div className="info-div">
            <i className="fa-solid fa-phone"></i>
            <p>
              Hotliner <br />
            <span style={{color: ' #E5CDA6'}}>Mon - Fri: 8am - 4pm</span><br />
            </p>
          </div>

        </div>

        <div className="contact-message">
          <p><b>Leave a Message</b></p>
          <p>We'd love to hear from you. Our friendly team is always heere to help you.</p>
            <form action="#">
                <div className="name-box">
                    <p>Your Name</p>
                    <input type="text" style={{width:'500px',height:'33px', backgroundColor:'#F5F5F5', border:'none'}} />
                </div>
                  <div className="name-box">
                    <p>Your Email</p>
                    <input type="text" style={{width:'500px',height:'33px', backgroundColor:'#F5F5F5', border:'none'}}/>
                </div>
                  <div className="name-box">
                    <p>Subject</p>
                    <input type="text" style={{width:'500px',height:'33px', backgroundColor:'#F5F5F5', border:'none'}} />
                </div>
                <div className="name-box">
                    <p>Your message (optional) </p>
                    <textarea style={{width:'500px',height:'80px', backgroundColor:'#F5F5F5', border:'none'}}></textarea>
                </div>
            </form>

        </div>

      </div>
    </div>
  )
}

export default Contact