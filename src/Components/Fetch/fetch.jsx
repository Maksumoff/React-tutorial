import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState([]);

  const getUsers = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ""}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
      // console.log(res);
    });
  }, []);

  const getInfo = (id) => {
    getUsers(id).then((res) => setSelected(res));
    // console.log(id);
  };
  // const { id, name, email, phone } = selected;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        {users.map(({ id, name }) => (
          <h2 key={id}>
            {id}
            {"."} {name} <button onClick={() => getInfo(id)}>Get Info</button>
          </h2>
        ))}
      </div>
      <div style={{ flex: "1" }}>
        <h1>Info:</h1>
        <h3>
          Name: {selected?.id}
          {"."} {selected?.name}
        </h3>
        <h3>Email: {selected?.email}</h3>
        <h3>Phone: {selected?.phone}</h3>
      </div>
    </div>
  );
};

export default Fetch;

// const Fetch = () => {
//   const [user, setUser] = useState([]);
//   const [selected, setSelected] = useState([]);

//   const getUsers = (id) => {
//     return fetch(
//       `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ""}`
//     ).then((res) => res.json());
//   };

//   useEffect(() => {
//     getUsers().then((res) => {
//       setUser(res);
//       // console.log(res);
//     });
//   }, []);

//   const getInfo = (id) => {
//     getUsers(id).then((res) => {
//       setSelected(res);
//       // console.log(res);
//     });
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ flex: 1 }}>
//         {user.map(({ id, name }) => (
//           <h2 key={id}>
//             {id}
//             {"."} {name} <button onClick={() => getInfo(id)}>Get info</button>
//           </h2>
//         ))}
//       </div>
//       <div style={{ flex: 1 }}>
//         <h3>Name: {selected?.name}</h3>
//         <h3>Email: {selected?.email}</h3>
//         <h3>Phone: {selected?.phone}</h3>
//       </div>
//     </div>
//   );
// };

// export default Fetch;
