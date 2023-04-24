import { useState } from "react";
const GetData = () => {
  const [houseList, setHouseList] = useState([]);

  const getInfo = (id) => {
    return fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/list?page=${id}`,
      // "http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/list ",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setHouseList(res?.data);
        console.log(res);
      });
  };

  //sort 'houseList' in an ascending order
  const sortId = houseList.sort((a, b) => a.id - b.id);

  const onDelete = (id) => {
    return fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/${id}`,
      {
        method: "Delete",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) {
          getInfo();
        }

        // if (res?.success) {
        //   getInfo();
        // }
        // res?.success && getInfo()
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <button onClick={() => getInfo(0)}>Get Data - First Page</button>
      <button onClick={() => getInfo(1)}>Get Data - Second Page</button>
      {sortId.map(({ id, name, description }) => (
        <div key={id} style={{ display: "flex" }}>
          <h3 style={{ marginRight: "5px" }}>
            Name: {id}
            {"."} {name}
            {"."}
          </h3>

          <h3 style={{ marginRight: "5px" }}>Description: {description}</h3>
          <button onClick={() => onDelete(id)}>delete</button>
          <button onClick={() => localStorage.setItem("id", id)}>
            change/update
          </button>
        </div>
      ))}
    </div>
  );
};

export default GetData;
