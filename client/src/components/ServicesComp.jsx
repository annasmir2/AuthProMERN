import React, { useState, useEffect } from 'react';
import { useAuth } from "../store/auth";

function ServicesComp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const { setloading } = useAuth();

  const submit = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      let res = await fetch("http://localhost:8000/api/service/service", {
        method: "GET",
      });
      let data = await res.json();
      let arr = data.msg;
      setData(arr);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    submit();
  }, []);

  const images = [
    '/images/Js.png',
    '/images/React.png',
    '/images/Node.png',
    '/images/Mongo.png',
    '/images/Prob.avif',
    '/images/Comm.avif'
  ];

  return (
    <div className="services-container">
      {loading ? ( 
        <p>Loading...</p> 
      ) : (
        data.length > 0 ? (
          data.map((item, index) => (
            <div className="card" key={item._id}>
              <img src={images[index % images.length]} alt={`Service ${index + 1}`} className="card-image" />
              <h3 className="card-heading">{item.service}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))
        ) : (
          <p>No services available</p> 
        )
      )}
    </div>
  );
}

export default ServicesComp;
