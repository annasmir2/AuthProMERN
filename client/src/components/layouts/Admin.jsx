import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdOutlineContactSupport, MdMedicalServices } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

function Admin() {
  const { User } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (User.isAdmin) {
      toast.success("Welcome to Admin Panel");
    }
  }, [User.isAdmin]);

  return (
    <>
      <header>
        {!User.isAdmin && setLoading ? (
          <div className="access-denied">
            <img
              src="https://img.freepik.com/premium-vector/blocked-user-icon-flat-vector_116137-13910.jpg?ga=GA1.1.1874478180.1722414729&semt=ais_hybrid"
              alt="Access Denied"
              className="access-denied-image"
            />
            <p>Access Denied</p>
            <p>Failed to load the page. Admin access only.</p>
          </div>
        ) : (
          <div className="container">
            <nav>
              <ul>
                <li>
                  <Link to="/admin/users">
                    <FaUsers />
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/admin/contacts">
                    <MdOutlineContactSupport />
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <MdMedicalServices />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <IoHome />
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <Outlet />
    </>
  );
}

export default Admin;
