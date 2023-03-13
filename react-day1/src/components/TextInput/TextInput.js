import React, { useState } from "react";

const TextInput = () => {
  const [name, setName] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <p style={{ fontWeight: "bold" }}>Take input text</p>
      <input
        onChange={(event) => handleName(event)}
        type={"text"}
        value={name}
      />
      <p>Current input: {name}</p>
      <hr />
    </>
  );
};

export default TextInput;
