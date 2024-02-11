export default function CategoriesProps(props) {
  return (
    <div className="category">
      <div className="img-container">
        <img src={props.image} alt="" />
      </div>
      <p className="category-name">{props.categoryName}</p>
    </div>
  );
}
