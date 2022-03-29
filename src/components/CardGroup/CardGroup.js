import React from "react";
import Card from "../Card/Card";
import Card2 from "../Card2/Card2";

const CardGroup = () => {
  const products = [
    { id: 1, name: "Laptop apple", price: 150000 },
    { id: 2, name: "Laptop acer", price: 100000 },
    { id: 3, name: "Laptop lenovo", price: 50000 },
    { id: 4, name: "Laptop dell", price: 10000 },
  ];
  return (
    <div>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>

      <div className="card-group">
        {products.map((product) => (
          <Card2 key={product.id} product={product}></Card2>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
