import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);
  console.log(user);

  useEffect(() => {
    if (!user && !isSuccess) {
      navigate("/");
    }
  }, [user, isSuccess]);

  return <div></div>;
};

export default UserDashboard;
