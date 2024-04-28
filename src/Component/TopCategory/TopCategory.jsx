








import { useEffect, useState } from "react";
import Hook from "../Hook/Hook";
import { data } from "autoprefixer";
import { setItem } from "localforage";





const TopCategory = () => {


  const { user } = Hook() || {};
  // console.log(user);
  const [item, setItem] = useState([]);
  useEffect(() => {
    
    fetch(`http://localhost:5000/TopCategory/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setItem(data);
      });
    
  },[user]
)

  return (
    <div>
   <div>
      
        <div className="flex gap-2">  
        <img src="https://i.ibb.co/cQW5TFJ/images.jpg" className="rounded-full h-9 mr-1 mt-2" alt="" />  
        <h1 className="text-[#FB9AD1] font-bold text-4xl text-start mb-1">Top Category</h1>
        </div>
        
  <h2 className="text-3xl text-start mb-5 mt-2 ml-12 text-[#f3d4e5]">Browse By Category</h2>
 {
        item?.map(p => (
          <div key={p._id}>
            <div className="card w-96 bg-[#FFCDEA] shadow-xl border-2">
  <figure className="px-10 pt-10">
    <img src={p.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-blue-950 font-serif">
                <h2 className="card-title text-blue-950"> ProductName: { p.productName}</h2>
                <h2 className="card-title"> Category: { p.category}</h2>
                <h2 className="card-title"> rating { p.rating}</h2>
    <p className="font-serif font-bold"> price: {p.price} </p>
    <div className="card-actions">
                  <button className="btn btn-primary">Detail</button>
                     
    </div>
  </div>
</div>
          </div>
        ))
      }

    </div>
    </div>
  );
};

export default TopCategory;