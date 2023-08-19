import React from "react";
import { useParams } from "react-router-dom";

export const TrainDetails = ({ trains }) => {
  const { trainNumber } = useParams();
  const selectedTrain = trains.find((trains) => trains.trainNumber === trainNumber);

  if (!selectedTrain) {
    return <div>Train not found</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <p>Train Name: {selectedTrain.trainName}</p>
      <p>Train Number: {selectedTrain.trainNumber}</p>
      
    </div>
  );
};

export default TrainDetails;
