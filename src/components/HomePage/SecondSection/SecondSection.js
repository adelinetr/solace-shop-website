import Photo01 from "./images/Photo01.png";
import "./SecondSection.scss";

export default function SecondSection() {
  return (
    <>
      <div className="second-section">
        <div className="left-container">
          <img className="intro-photo" src={Photo01} alt="Heels" />
        </div>
        <div className="right-container">
          <p>
            Embrace the freedom to express yourself through our meticulously
            crafted collection, designed to evoke a sense of wanderlust and
            awaken your inner explorer.
          </p>

          <div className="learn-more-button">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
