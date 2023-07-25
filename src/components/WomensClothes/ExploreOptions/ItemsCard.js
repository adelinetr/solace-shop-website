import React, { useState } from "react";

export default function ItemsCard (props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
        <>
           <div
        className={`item-card ${props.className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-card">
          <img className="img-card" src={props.image} alt="" />
          {isHovered && <div className="hover-text">Learn More</div>}
        </div>

        <div className="text-item-card">
          <p>{props.itemName}</p>
          <p>{props.price}</p>
        </div>
      </div>
        </>
    )
}