import { Outlet } from "react-router-dom";

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
const Root = () => {
  return (
    <div>
      
      <div className="mb-5">
        
<NavBar></NavBar>

</div>
<Outlet></Outlet>

      
      <div className="mt-5">
        
        <Footer></Footer>
</div>

    </div>
  );
};

export default Root;