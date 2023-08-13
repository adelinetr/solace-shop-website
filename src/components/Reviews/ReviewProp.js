export default function ReviewProps(props) {
    return(
        <div className="card-review">
            <div className="img-review">
                <img src={props.image} alt="" />
            </div>

            <div className="name-review">
                <p className="clients-name">{props.name}</p>
            </div>

            <div className="review-text">
                {props.review}
            </div>
        </div>
    )
}