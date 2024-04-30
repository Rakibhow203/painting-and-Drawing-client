import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Hook from "../Hook/Hook";
import Swal from "sweetalert2";


const Social = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';
  const { googleLogin, githubLogin } = Hook();

 const handleGoogleLogin = () => {
    googleLogin().then(result => {
      if (result.user) {
        navigate(form);
        Swal.fire({
          title: 'Success!',
          text: 'User logged in successfully with Google',
          icon: 'success',
          confirmButtonText: 'Cool',
          
        });
        
      }
    }).catch(error => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    });
  };


  const handleGithubLogin = () => {
    githubLogin().then(result => {
      if (result.user) {
        navigate(form);
        Swal.fire({
          title: 'Success!',
          text: 'User logged in successfully with GitHub',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
    }).catch(error => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    });
  };

  return (
    <div>
       <div>
      {' '}
      <div className="flex gap-8 text-2xl ml-14 mb-3 mt-2">
        <button onClick={handleGoogleLogin}>
          <FcGoogle></FcGoogle>
        </button>
        <button onClick={handleGithubLogin}>
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Social;