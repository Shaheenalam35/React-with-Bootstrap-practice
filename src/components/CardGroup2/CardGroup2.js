import React from "react";
import { CardGroup } from "react-bootstrap";
import Card2 from "../Card2/Card2";

const CardGroup2 = () => {
  const products = [
    { id: 1, name: "Laptop apple", price: 150000 },
    { id: 2, name: "Laptop acer", price: 100000 },
    { id: 3, name: "Laptop lenovo", price: 50000 },
    { id: 4, name: "Laptop dell", price: 10000 },
  ];
  return (
    <div>
      <CardGroup>
        {products.map((product) => (
          <Card2 key={product.id} product={product}></Card2>
        ))}
      </CardGroup>
    </div>
  );
};

export default CardGroup2;
