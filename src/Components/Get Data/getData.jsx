import { useState } from "react";
const GetData = () => {
  const [houseList, setHouseList] = useState([]);
  const getInfo = () => {
    return fetch("http://158.51.99.245:8081/api/v1/houses/list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setHouseList(res?.data);
        console.log(res);
      });
  };

  const sortId = houseList.sort((a, b) => a.id - b.id);

  return (
    <div>
      <button onClick={getInfo}>Get Data</button>
      {sortId.map(({ id, name, description }) => (
        <div key={id}>
          <h3>
            Name: {id}
            {"."} {name}
          </h3>
          <h4>description: {description}</h4>
        </div>
      ))}
    </div>
  );
};

export default GetData;
