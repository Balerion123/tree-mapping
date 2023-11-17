import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const AuthChecker = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuthenticated = async () => {
      setIsLoading(true);

      setIsLoading(false);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default AuthChecker;
