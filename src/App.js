import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import axios from "axios";
function App() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(null);
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setTimeout(() => {
          setUsers(response.data);
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, []);

  if (users === null) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="App">
      <Header username={username} />
      <Form setUsername={setUsername} />
      {users.map((user) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>{user.name}</h2>
          <p>{user.userName}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
