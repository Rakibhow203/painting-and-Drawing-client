


const Brand = ({ category  }) => {
  
console.log(category);
  const { image,productName,  } = category;
  return (
   <div>
<div className="card w-72 bg-[#f8e9f2] shadow-xl border-collapse">
  <figure className="px-10 pt-10">
    <img src=  { image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> Name: {productName} </h2>
    <p>  category: {} </p>
    <div className="card-actions">
      <button className="btn btn-primary">More Details</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Brand;