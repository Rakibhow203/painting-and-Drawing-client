import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Hook from "../Hook/Hook";


const Social = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';
  const { googleLogin, githubLogin } = Hook();
  const handleGoogleLogin = () => {
    alert('Wow logIn successfully');
    googleLogin().then(result => {
      if (result.user) {
        navigate(form);
      }
    });
  };

  const handleGithubLogin = () => {
    githubLogin().then(result => {
      if (result.user) {
        navigate(form);
      }
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