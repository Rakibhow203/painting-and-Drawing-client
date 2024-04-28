import Banner from "../Banner/Banner";
import PaintingAndDrawing from "../PaintingAndDrawing/PaintingAndDrawing";

import Testimonial from "../Testimonial/Testimonial";
import TopCategory from "../TopCategory/TopCategory";
import WhyUs from "../WhyUs/WhyUs";


const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <div className="mt-5 mb-5">
        
        <TopCategory></TopCategory>
   </div>
      
      <div>
        <PaintingAndDrawing></PaintingAndDrawing>
      </div>

      <div>

<Testimonial></Testimonial>
        
      </div>
      <div>

        <WhyUs></WhyUs>
      </div>


    </div>
  );
};

export default Home;