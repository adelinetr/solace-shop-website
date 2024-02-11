import Photo02 from "./images/clothing01.png";
import Photo03 from "./images/clothing02.png";

export default function OurClothing() {
  return (
    <>
      <div className="our-clothing">
        <div className="first-column">
          <h3>Our Clothing</h3>
          <p>
            From the very beginning, Solace committed itself to uncompromising
            quality. Every fabric and material chosen was of the highest
            caliber, ensuring that wearers not only felt comfortable but also
            indulged in luxury. Solace aimed to create a haven of style where
            people could find solace in the embrace of high-quality and
            comfortable clothing.
            <br />
            <br />
            Embracing a color palette inspired by the gentle hues found in
            nature, Solace introduced pastel shades of gray, light-green, beige,
            and black. These colors, with their soft and delicate allure, served
            as a canvas upon which wearers could paint their unique stories and
            express their personal style.
          </p>
        </div>

        <div className="second-column">
          <div className="photos-row">
            <img src={Photo02} alt="" />
            <img src={Photo03} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
