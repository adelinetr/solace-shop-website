import "./Main.scss";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Header activePage="./" />
      <section className="main">
        <h2 className="hero-heading">
          Unveiling the Silent Language of Colors
        </h2>
        <p className="hero-p">
          Our brand embodies the perfect blend of lightness, sensuality, and
          sophistication, curated for those who appreciate the beauty of
          simplicity and inspired by nomad life.
        </p>

        <div className="hero-button">
          <button className="explore-button">
            <Link to="/womens-clothes">
              <a href="#">Explore</a>
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
