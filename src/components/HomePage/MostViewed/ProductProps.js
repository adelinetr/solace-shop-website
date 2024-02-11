export default function ProductProp(props) {
  return (
    <div className={props.className}>
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>

      <div className="description-container">
        <div className="pricing-name">
          <div className="item-name">
            <h3 className="item">{props.itemName}</h3>
          </div>

          <div className="price">
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
