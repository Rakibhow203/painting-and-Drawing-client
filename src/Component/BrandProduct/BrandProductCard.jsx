

// import React from "react";

// const BrandProductCard = ({ product }) => {
//   console.log(product);

//   return (
//     <div>

//  <div className="card w-96 h-[570px] bg-base-100 shadow-xl">
//         <figure className="px-10 pt-10">
//           <img src={product.image} alt={product.name} className="rounded-xl h-56 min-w-40" />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title"> Category:{product.category}</h2>
//           <p>{product.des}</p>
        
//         </div>
//       </div>

//     </div>
//   );

// };

// export default BrandProductCard;


import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const BrandProductCard = ({ product }) => {
  console.log(product);

  return (
    <div>
      <Link to={`/product/${product._id}`} className="card-link">
        <div className="card w-96 h-[570px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={product.image} alt={product.name} className="rounded-xl h-56 w-80" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-red-300"> Category: {product.category}</h2>
            <p>{product.des}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandProductCard;