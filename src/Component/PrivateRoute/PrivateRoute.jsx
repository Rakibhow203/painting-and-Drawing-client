
import Hook from "../Hook/Hook";


const PrivateRoute = ({children) => {
const {user}=Hook()
  if (!user) {
    return <Login></Login>;
  }
  return <div>{children}</div>;
}
export default PrivateRoute;