import Header from "../../Header/Header";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <>
      <Header activePage="./womens-clothes" />
      <div className="hero-section">
        <div className="hero-text">
          <h2 className="hero-h2">Wanderer, Free-Spirit, Explorer</h2>
          <p className="p-hero">
            Discover the joy of self-expression with our thoughtfully curated
            assortment, meticulously designed to ignite your adventurous spirit
            and inspire a deep longing for exploration.
          </p>
        </div>
      </div>
    </>
  );
}
