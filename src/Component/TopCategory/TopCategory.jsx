import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";








const TopCategory = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topBrand")
      .then(res => res.json())
    .then(data => {
      setCategory(data)
    
    })
   

},[])
  

  return (
    <div className="pt-10">
      
<div className="flex gap-2">
        <img src="https://i.ibb.co/cQW5TFJ/images.jpg" className="rounded-full h-9 mr-1 mt-2" alt="" />
        <h1 className="text-[#FB9AD1] font-bold text-4xl text-start mb-1">Painting and Drawing Item Section</h1>
      </div> 
      <h1 className="text-start m-4 ml-14 font-serif font-extrabold text-2xl text-red-200">Browse By Item's Category</h1>
<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
      {categories.map(category => (
        <Brand key={category._id} category={category} />
      ))}



      </div>
    </div>
  );
};

export default TopCategory;



 