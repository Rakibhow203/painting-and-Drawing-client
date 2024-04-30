import { Link } from "react-router-dom";



const Brand = ({ category  }) => {
  
// console.log(category);
  const { image,productName,rating , _id, price, time, customization, stock,  } = category;
  return (
   <div>
<div className="card w-96 h-[580px] bg-[#120e11] shadow-xl border-collapse">
  <figure className="px-10 pt-10">
    <img src=  { image} alt="Shoes" className="rounded-xl w-80 h-48" />
  </figure>
  <div className="card-body items-center text-center">
          <h2 className="card-title text-red-300"> Name: {productName} </h2>
          

          <p className="font-serif text-yellow-200" >Total Price: {price}
          
          <p> Average Time: {time} </p>
          <p> Customization: {customization} </p>
            <p className="bg-green-500 text-white"> Stock: {stock} </p>
            <p>  Rating: {rating} </p>
          </p>
    {/* 1st wark */}
   <Link to={`/product-by-category/${_id}`}>   <button className="btn btn-primary bg-[#FB9AD1]">View Details</button></Link>
  </div>
</div>
    </div>
  );
};

export default Brand;