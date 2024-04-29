

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
    <div className=" pt-10">
      
      <div className="flex gap-2">
<img src="https://i.ibb.co/cQW5TFJ/images.jpg" 
          className="rounded-full h-9 mr-1 mt-2" alt="" />  
        <h1 className="text-[#FB9AD1] font-bold text-4xl text-start mb-1">Top Brand</h1>
      </div>
     <h2 className="text-3xl text-start mb-5 mt-2 ml-12 text-[#f3d4e5]">Browse By Category</h2>
      


      <div>
        


</div>



    </div>
  );
};

export default TopCategory;



 