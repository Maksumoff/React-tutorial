import React, { useState } from "react";

export const Add = () => {
  const [building, setBuilding] = useState({
    address: "Khanstore",
    attachments: [
      {
        imgPath: "string",
      },
    ],
    categoryId: 0,
    city: "Tashkent",
    componentsDto: {
      additional: "string",
      airCondition: true,
      courtyard: true,
      furniture: true,
      gasStove: true,
      internet: true,
      tv: true,
    },
    country: "Uzbekistan",
    description: "Online store",
    homeAmenitiesDto: {
      additional: "string",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: true,
      school: true,
      stadium: true,
      subway: true,
      superMarket: true,
    },
    houseDetails: {
      area: 120,
      bath: 1,
      beds: 0,
      garage: 2,
      room: 8,
      yearBuilt: 2024,
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: "khanstore",
    price: 2250,
    region: "string",
    salePrice: 0,
    status: true,
    zipCode: "100022",
  });

  const addInfo = () => {
    return fetch(
      "http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses",
      {
        method: "POST",
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
      <button onClick={addInfo}>add</button>
    </div>
  );
};

export default Add;
