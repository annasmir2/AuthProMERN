import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/auth";
import { useParams } from "react-router-dom";

function Edit() {
  const [data, setData] = useState({});
  const { authorization } = useAuth();
  const { id } = useParams();

  const getUser = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/admin/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      const result = await res.json();
      if (res.ok) {
        console.log(result);
        setData(result);
      } else {
        console.error(`Error: ${result.message}`);
        setData({});
      }
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
      setData({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:8000/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorization,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (res.ok) {
        console.log(result);
        setData(result);
      } else {
        console.error(`Error: ${result.message}`);
        setData({});
      }
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
      setData({});
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={data.username || ""}
          onChange={handleChange}
          name="username"
        />
        <label>Email</label>
        <input
          type="text"
          value={data.email || ""}
          onChange={handleChange}
          name="email"
        />
        <label>Phone</label>
        <input
          type="text"
          value={data.phone || ""}
          onChange={handleChange}
          name="phone"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Edit;
