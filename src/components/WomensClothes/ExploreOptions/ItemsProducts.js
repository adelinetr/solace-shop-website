import React from "react";
import ItemsCard from "./ItemsCard";
import { Link } from "react-router-dom";

export default function ItemsProduct({ activePage, itemsData }) {
  const itemsPerPage = 6;
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter items based on the active page
  const itemsToDisplay = itemsData.slice(startIndex, endIndex);

  return (
    <>
      <div className="our-options">
        {itemsToDisplay.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <ItemsCard
              image={item.mainImage}
              itemName={item.name}
              description={item.description}
              price={item.price}
              status={item.status}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
