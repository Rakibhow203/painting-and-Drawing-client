import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Social from "../Social/Social";
import { useForm } from "react-hook-form";
import Hook from "../Hook/Hook";
import Swal from "sweetalert2";


const LogIn = () => {
  const { signInUser } = Hook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';

  const onSubmit = data => {
    const { email, password } = data;
    signInUser(email, password).then(result => {
      if (result.user) {
        // Show success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
        }).then(() => {
          navigate(form);
        });
      }
    }).catch(error => {
      // Handle login error
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });
    });
  };
  return (
      <div>
      <div className="hero min-h-screen bg-base-200">
        {<spner></spner>}
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Your existing form code */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <div>
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register('password', { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p>
                  New to Site?
                  <NavLink to="/register" className="text-blue-600 ml-2">
                    Create an account
                  </NavLink>
                </p>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className=" text-2xl ml-14 mt-2">
              <Social></Social>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;