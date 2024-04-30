import React, { useEffect, useState } from "react";
import BrandProductCard from "./BrandProductCard";

const BrandProduc = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/subCategory')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, []);
  // console.log(products);


  return (
    <div>
      <h1 className="text-3xl mb-4 mt-12 text-red-400 font-sans font-extrabold ">Printing & Drawing Categories Section</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {products.map(product => (
          <BrandProductCard key={product._id} product={product} />
        ))}

      </div>

    </div>
  );
};

export default BrandProduc;