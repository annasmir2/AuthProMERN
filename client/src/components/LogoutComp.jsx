import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function LogoutComp() {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    LogoutUser();
    navigate("/login");
  };
  useEffect(() => {
    logout();
  }, [LogoutUser]);

  return <></>;
}

export default LogoutComp;
