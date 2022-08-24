import React, { useState } from "react";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [surname, setSurname] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputValue === "" || surname === "") {
          alert("All fields are required!");
          return;
        }
        props.setUsername(inputValue + " " + surname);
      }}
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setInputValue(event.target.value);
        }}
        value={inputValue}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "30px",
          borderRadius: "10px",
          marginRight: "20px",
        }}
        type="text"
        placeholder="Enter Username"
      />
      <input
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "30px",
          borderRadius: "10px",
          marginRight: "20px",
        }}
        placeholder="Enter Surname"
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
      />
      <button style={{ borderRadius: "10px", fontSize: "20px" }} type="submit">
        Send
      </button>
    </form>
  );
};
export default Form;
