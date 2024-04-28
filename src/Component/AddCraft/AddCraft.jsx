
import { IoMdAddCircle } from "react-icons/io";
import Hook from "../Hook/Hook";
import Swal from "sweetalert2";



const AddCraft = ({ update }) => {
  const { user } = Hook() || {};
  const handleAddUser = (e) => {


    e.preventDefault();
    
    

    const form = e.target;
    const productName = form.productName.value;
    const category = form.category.value;
    const price = form.price.value;
    const time = form.time.value;
    const image = form.image.value;
    const customization = form.customization.value;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const description = form.description.value;
    const email = user.email;

    const info = { productName, category, price,time, image, customization,rating,stock, email,description };
    console.log(info);

    fetch('http://localhost:5000/addProduct', {

    method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify(info),
    
    
  })
    .then(res => res.json())
      .then(data => {
        console.log(data);
      if (data?.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'User added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        
        });
        form.reset();

      }
  })
  }


  

  return (

     <div className="gadgetContainer pt-10 ">
      <div className="shadow-lg p-5 border rounded-lg bg-[#e0d5dc]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
              
            </span>
            <span className="dark:text-white flex justify-center gap-2">
              
          <span className="text-[#FF497C] flex justify-center  gap-3">
                <IoMdAddCircle />
                {update ? "Update " : "Add "}
                
              </span>
              Your Product
            </span>
          </p>
        </div>
        {/* form */}
        <form  onSubmit={handleAddUser}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                item_Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Item Name"
                id="name"
                name="productName"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Subcategory_Name
              </label>
              <select
                name="category"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Brand"
                
              >
                <option value="Landscape Painting" selected>
                  Landscape Painting
                </option>
                <option value="Portrait Drawing" selected>
                  Portrait Drawing
                </option>
                <option value="Water-colour Painting" selected>
                  Water-colour Painting
                </option>
                <option value="Oil Painting" selected>
                  Oil Painting
                </option>
                <option value="Charcoal Sketching" selected>
                  Charcoal Sketching
                </option>
                <option value="Cartoon Drawing" selected>
                  Cartoon Drawing
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                processing_time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter time"
                id="Price"
                name="time"
              />
            </div>



            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image_url
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                customization
              </label>
              <select
                name="customization"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Brand"
              >
                <option value="yes" selected>
                  yes
                </option>
                <option value="no" selected>
                  no
                </option>
                
              </select>
              

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                stockStatus
              </label>
             <select
                name="stock"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Brand"
              >
                <option value="In stock, Made to Order" selected>
                  In stock, Made to Order 
                </option>
                <option value="Out of stock" selected>
                  Out of stock
                </option>
                
              </select>
            </div>
            
          </div>
             <label className="block mb-2 dark:text-white" htmlFor="name">
                short description
              </label>
              <input
                className="w-full h-20 p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="short description"
                id="name"
                name="description"
              />

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>


    
  );
};

export default AddCraft;