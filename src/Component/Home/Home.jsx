import Banner from "../Banner/Banner";
import PaintingAndDrawing from "../PaintingAndDrawing/PaintingAndDrawing";
import PaintingAndDrawingCategory from "../PaintingAndDrawingCategory/PaintingAndDrawingCategory";
import Testimonial from "../Testimonial/Testimonial";
import WhyUs from "../WhyUs/WhyUs";


const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <div className="mt-5 mb-5">
        
        <PaintingAndDrawingCategory></PaintingAndDrawingCategory>
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