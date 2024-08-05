import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Users() {
  const [data, setData] = useState(null);
  const { authorization } = useAuth();
  const [isAuth, setAuth] = useState(true);

  const getAllUsers = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      const result = await res.json();
      if (res.ok) {
        setData(result);
        setAuth(true);
      } else {
        console.error(`Error: ${result.message}`);
        setData([]);
        setAuth(false);
      }
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
      setData([]);
      setAuth(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteit = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorization,
          },
        }
      );
      const result = await res.json();
      if (res.ok) {
        getAllUsers();
        setAuth(true);
      } else {
        console.error(`Error: ${result.message}`);
        setData([]);
        setAuth(false);
      }
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
      setData([]);
      setAuth(false);
    }
  };
  return (
    <section className="admin-users-section">
      <div className="container">
        <h1>Admin User Data</h1>
      </div>
      <div className="container admin-users">
        {!isAuth ? (
          <div className="access-denied">
            <img
              src="https://img.freepik.com/premium-vector/blocked-user-icon-flat-vector_116137-13910.jpg?ga=GA1.1.1874478180.1722414729&semt=ais_hybrid"
              alt="Access Denied"
              className="access-denied-image"
            />
            <p>Access Denied</p>
            <p>Failed to load the page. Admin access only.</p>
          </div>
        ) : Array.isArray(data) && data.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link to={`/admin/users/${item._id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => deleteit(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found</p>
        )}
      </div>
    </section>
  );
}

export default Users;
