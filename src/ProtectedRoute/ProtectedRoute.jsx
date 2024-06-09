import { Navigate } from 'react-router-dom';

// Higher-Order Component for protected routes
const ProtectedRoute = ({ element, allowedRoles, ...rest }) => {
  const isUserLoggedIn = () => {
    let data = localStorage.getItem("data");
    return data != null;
  };

  const getCurrentUserRole = () => {
    if (isUserLoggedIn()) {
      return JSON.parse(localStorage.getItem("data")).role;
    } else {
      return null;
    }
  };

  const userRole = getCurrentUserRole();

  if (userRole && allowedRoles.includes(userRole)) {
    return element;
  } else {
    return <Navigate to="/user-login" />;
  }
};

export default ProtectedRoute;