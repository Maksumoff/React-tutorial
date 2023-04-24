import React, { useState } from "react";

export const Update = () => {
  const [building, setBuilding] = useState({
    address: "Khanstore/uz",
    name: "khan",
  });

  const updateInfo = () => {
    return fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/${localStorage.getItem(
        "id"
      )}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(building),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <button onClick={updateInfo}>update</button>
    </div>
  );
};

export default Update;
