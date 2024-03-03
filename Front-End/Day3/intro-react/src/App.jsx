// import "./App.css";
// import Button from "./components/core/button";
import React, { useState } from "react";
import ThisIsAlert from "./components/core/alert";
import { Outlet } from "react-router-dom";
import NavBar from "./components/core/navbar";
import Footer from "./components/core/footer";
import Introduce from "./pages/introduce/intro";
import InputValue from "./components/core/input";

function App() {
  function ThisAlert() {
    return confirm("Are you sure about that ?");
  }

  const [getNewName, setNewName] = useState("");
  function changeNameValue() {
    setNewName("hahahaha");
  }
  const [getInput, newInput] = useState("");

  function changeValuebyInput() {
    newInput('hahaha');
    // console.log(newInput);
  }
  return (
    <>
      <NavBar />
      <Introduce newValue={getNewName} />
      {/* <p>{getNewName}</p> */}
      <button onClick={() => changeNameValue()}>Ubah Nama</button>
      <ThisIsAlert clickMe={ThisAlert} />
      <hr />
      <InputValue newInputValue={getInput} />
      <button onClick={() => changeValuebyInput()} type="submit">
        Submit
      </button>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
{
  /* <Button testAlert={AlertButton()} /> */
}
