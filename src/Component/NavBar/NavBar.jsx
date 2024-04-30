import { NavLink } from "react-router-dom";
import Hook from "../Hook/Hook";


const NavBar = () => {
const {user, logOut} = Hook();
  return (
     <div >
      <div className="container mx-auto">
        <div className="navbar rounded-lg bg-[#86469C]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm items-center dropdown-content z-[2] p-2 shadow bg-[#BC7FCD] rounded-box w-40 font-bold  text-white "
              >
                        <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded '
                    : 'font-bold'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/addp&d"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded'
                    : 'font-bold'
                }
              >
                  
                  Add Products
              </NavLink>

              <NavLink
                to="/allpaints"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded'
                    : 'font-bold'
                }
              >
                All Paints
              </NavLink>


              <NavLink
                to="/myArts"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded'
                    : 'font-bold'
                }
              >
               My Painting and Drawing
              </NavLink>
              </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost font-bold text-xl">
              <span className=""><img src="https://i.ibb.co/n8h2kYh/images.png" className="rounded-full h-8" /></span>
              <span className="text-[#2cf703f9]">Painting & </span>
              <span className=" text-[#fe03fa]">Drawing</span>
            </NavLink>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center font-semibold gap-4">
                <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#83ff5af9] border border-[#22f801c6] p-2 rounded '
                    : 'font-bold'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/addp&d"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#83ff5af9] border border-[#22f801c6] p-2 rounded'
                    : 'font-bold'
                }
              >
                  
                  Add Products
              </NavLink>

              <NavLink
                to="/allpaints"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#83ff5af9] border border-[#22f801c6] p-2 rounded'
                    : 'font-bold'
                }
              >
                All Painting & Drawing
              </NavLink>

 <NavLink
                to="/myarts"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#83ff5af9] border border-[#22f801c6] p-2 rounded'
                    : 'font-bold'
                }
              >
               My Painting & Drawing
              </NavLink>
              
            </ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div>
                <div className="flex">
                  <div
                    className=" tooltip tooltip-open tooltip-left"
                    data-tip={user.displayName}
                  >
                    <img
                      className=" w-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>

                  <button onClick={logOut} className="btn bg-[#d25967b0]">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <NavLink to="/login" className="btn bg-[#FB9AD1] text-white">
                login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;