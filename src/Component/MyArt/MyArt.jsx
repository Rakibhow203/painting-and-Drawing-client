
import { useEffect, useState } from "react";
import Hook from "../Hook/Hook";
import { data } from "autoprefixer";
import { setItem } from "localforage";


const MyArt = () => {

  const { user } = Hook() || {};
  // console.log(user);
  const [item, setItem] = useState([]);
  useEffect(() => {
    
    fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setItem(data);

      });
    
  },[user]
)

  return (
    <div className=" pt-10">
      
      {
        item?.map(p => (
          <div key={p._id}>
            <div>length: {p.length} </div>
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
  );
};

export default MyArt;