export default function ItemsCard(props) {
  return (
    <>
      <div className={`item-card ${props.className}`}>
        <div className="image-card">
          <img className="img-card" src={props.image} alt="" />
        </div>

        <div className="text-item-card">
          <p>{props.itemName}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </>
  );
}
