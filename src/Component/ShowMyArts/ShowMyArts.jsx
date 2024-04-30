import { Link } from "react-router-dom";


const ShowMyArts = ({ item }) => {
  const { image, price, rating, productName } = item;


  // console.log(item);
  return (
    <div>

      <div className="card w-72 h-96 bg-[#120e11] shadow-xl border-collapse">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-48 h-40" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white"> Name: {productName} </h2>
          <p className="text-white"> Rating: {rating} </p>


          <div className="card-actions flex">
            {/* <div className="card-actions justify-center gap-4 ">
              <button className="btn btn-primary w-32  bg-red-500 text-xl  text-white">Update</button>
              <button className="btn  bg-red-500 w-32 btn-primary text-xl">Delete</button>
            </div> */}

            <Link to={`/products/${item._id}`}>
              <button className="btn btn-secondary">Update</button>
            </Link>
            <button className="btn btn-secondary">Delete</button>

          </div>
        </div>
      </div>

    </div >
  );
};

export default ShowMyArts;