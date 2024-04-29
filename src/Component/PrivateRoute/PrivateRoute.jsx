
import Hook from "../Hook/Hook";
import LogIn from "../LogIn/LogIn";


const PrivateRoute = ({ children }) => {
const {user}=Hook()
  if (!user) {
    return <LogIn></LogIn>
  }
  return <div>{children}</div>;
}
export default PrivateRoute;