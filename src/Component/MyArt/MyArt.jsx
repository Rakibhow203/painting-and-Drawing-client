
import { useEffect, useState } from "react";
import Hook from "../Hook/Hook";
import ShowMyArts from "../ShowMyArts/ShowMyArts";
// import { data } from "autoprefixer";
// import { setItem } from "localforage";



const MyArt = () => {

  const { user } = Hook() || {};
  // console.log(user);
  const [items, setItem] = useState([]);
  useEffect(() => {

    fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setItem(data);

      });

  }, [user]
  )

  return (
    <div className="pt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
      {items.map(item => (
        <ShowMyArts key={item._id} item={item} />
      ))}
    </div>
  );
};

export default MyArt;