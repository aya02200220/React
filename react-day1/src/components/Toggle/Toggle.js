import React, { useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <p style={{ fontWeight: "bold" }}>Toggle: OPEN/CLOSE</p>
      <button onClick={toggle}>{open ? "OPEN" : "CLOSE"}</button>
      <hr />
    </>
  );
};
export default ToggleButton;
