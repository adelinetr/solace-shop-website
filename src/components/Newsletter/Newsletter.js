import "./Newsletter.scss";
import NewsletterImage from "./images/newsletter-img.png";

export default function Newsletter() {
  return (
    <>
      <div className="news-section">
        <div className="newsletter-section">
          <div className="left-newsletter">
            <h4 className="newsletter-h4">Subscribe to our newsletter</h4>
            <p className="newsletter-p">First purchase is 30% off</p>

            <div className="newsletter-box">
              <input
                className="input-email"
                type="email"
                id="email"
                placeholder="Enter your e-mail"
                name="email"
                required
              ></input>
              <button className="send-button">Send</button>
            </div>
          </div>

          <div className="right-newsletter">
            <div className="image-newsletter-container">
              <img className="circle-img" src={NewsletterImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
