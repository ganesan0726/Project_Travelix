import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "../css/adminStyle.css";

const Admin = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/destination");
  }, []);

  return (
    <>
      <div className="admin-content">
        <div className="admin-sidebar">
          <NavLink to="/admin/destination"> Admin Destination</NavLink>
          <br />
          <NavLink to="/admin/hotel">Admin Hotel</NavLink>
          <br />
          <NavLink to="/">Back To Home</NavLink>
        </div>
        <div className="admin-subScreen">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Admin;
