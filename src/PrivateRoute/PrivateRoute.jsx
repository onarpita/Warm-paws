import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { ClockLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClockLoader color="#8D6E63" size={60} />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
