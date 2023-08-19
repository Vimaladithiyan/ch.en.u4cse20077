import React, { Fragment, useEffect, useState } from "react";
import "./Showip.css"; 

export const Listrain = () => {
  const [trains, setTrains] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);

  const getTrains = async () => {
    try {
      const response = await fetch("http://20.244.56.144/train/trains", {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI0MjkxMjksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiZDllOWY2NWYtMzhjYi00NDdhLWJjMzQtYmRkODA4NWQ1Y2U2Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IkNILkVOLlU0Q1NFMjAwNzcifQ.PDpNwsCsyeN47hEZCbOubrWgKf8pyvIjQrDagyA_zL0'
        }
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();



      console.log(jsonData);
      setTrains(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = () => {
    window.location.href = "/";
  };

  const handleTrainClick = (train) => {
    console.log(train)
    setSelectedTrain(train);
  };

  useEffect(() => {
    getTrains();
  }, []);

  return (
    <Fragment>
      <div className="ip-container">
        <h2 className="ip-heading">Train List</h2>
        <table className="ip-table">
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Train Number</th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train) => (
              <tr key={train.trainNumber} onClick={() => handleTrainClick(train)}>
                <td>{train.trainName}</td> 
                <td>{train.trainNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedTrain && (
        <div>
          <h3>Selected Train Details</h3>
          <p>Train Name: {selectedTrain.trainName}</p>
          <p>Train Number: {selectedTrain.trainNumber}</p>
          {/* Add more details here */}
        </div>
      )}
      <div>
        <button className="link-btnip" onClick={logout}>Logout</button>
      </div>
    </Fragment>
  );
};