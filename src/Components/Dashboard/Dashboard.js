// Dashboard.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, DASHBOARD_URL } from "../../Services";
import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${DASHBOARD_URL}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    return () => {};
  }, []);

  return (
    <div className="container">
      <h1>Trending Topics</h1>
      {data.map((item) => (
        <div key={item.content_id} className="item">
          <h2>{item.categories}</h2>
          <Link
            to={{
              pathname: "/chatscreen",
              state: { category: item },
            }}
          >
            <img src={item.avatar} alt={item} className="avatar" />
          </Link>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
