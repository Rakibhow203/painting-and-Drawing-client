import { useLoaderData } from "react-router-dom";


const ProductByCategory = () => {
  const products = useLoaderData();
  console.log(products);
  const { image, category, customization, description, price, productName, rating, stock, time } = products;
  return (
    <div className="border p-8 rounded-lg">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={image} className="h-screen rounded-lg  lg:w-screen" /></figure>



        <div className="card-body mt-48">
          <div className="items-center justify-center mr-auto font-sans text-red-300">




            <h1 className="font-extrabold text-3xl text-red-600 mb-5">Very Hot collection</h1>
            <div className="divider divider-secondary"></div>


            <div className="justify-center items-center text-center mr-auto">


              <h2 className="card-title"> Name: {productName} </h2>
              <h2 className="card-title"> Category: {category} </h2>
              <h1>Customization: {customization} </h1>
            </div>

          </div>

          <div className="divider divider-secondary"></div>

          <div className="font-bold text-2xl text-blue-600"> Description:  <span className=" font-sans font-normal  text-red-100"> {description}  </span>
          </div>


          <div className="font-semibold font-serif text-white  border rounded-lg">

            <p>Rating: {rating} </p>
            <p> Stock: {stock} </p>
            <p> Time: {time} </p>
            <p> Price: {price} </p>

          </div>

          <div className="card-actions justify-center gap-4 ">
            <button className="btn btn-primary  bg-red-500">Add to Favourite </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductByCategory;