
export default function ProductProp(props) {
    const { nextButton, ...restProps } = props; // Destructure `nextButton` and the rest of the props

    return(
        <div className={props.className} className="product-container">
            <div className="image-container">
                <img src={props.image} alt="" />
                {nextButton && (
                    <div className={nextButton} className="next">
                        <svg width="8" height="15" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-4.2802e-08 1.07273L0.910026 0L6 6L0.910026 12L-4.2802e-08 10.9273L4.17995 6L-4.2802e-08 1.07273Z" fill="#383838"/>
                        </svg>
                    </div>
                    )}
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
      
                <div className="line">
                    <svg width="205" height="1" viewBox="0 0 290 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4.37114e-08" y1="0.5" x2="290" y2="0.500025" stroke="#606060"/>
                    </svg>
                </div>
                
                <div className="see-more-button">
                    <button>See more <span>&#8594;</span></button>
                </div>
            </div>
        </div>
    )
}