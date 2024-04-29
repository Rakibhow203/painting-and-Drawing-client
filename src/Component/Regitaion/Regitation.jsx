
import { useState } from "react";
import Hook from "../Hook/Hook";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Regitation = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = Hook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';

  const onSubmit = async (data) => {
    const { email, password } = data;

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      password.length < 6
    ) {
      // Show sweet alert for password requirements not met
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
      });
      return;
    }

    try {
      // Call your createUser function
      const result = await createUser(email, password);
      
      if (result.user) {
        // Show success sweet alert or redirect
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Registration successful!',
        }).then(() => {
          navigate(form);
        });
      }
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error);
      // Show error sweet alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Registration failed. Please try again.',
      });
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Your form inputs */}
            <div className="form-control">
              {/* Your input fields */}

 <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                {...register('fullName', { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
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
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                {...register('image')}
              />
            </div>
            <div className="form-control">
              <div className="relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register('password', { required: true })}
                />{' '}
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
                <span
                  className="absolute mt-4 -ml-5 "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="font-bold">
                Have an Account?
                <NavLink to="/login" className="text-blue-600 ml-3">
                  Login
                </NavLink>
              </p>
            





            </div>

            {/* Your existing form controls */}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Regitation;