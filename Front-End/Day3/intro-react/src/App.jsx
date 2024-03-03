// import "./App.css";
// import Button from "./components/core/button";
import { Outlet } from "react-router-dom";
import NavBar from "./components/core/navbar";
import Footer from "./components/core/footer";
import Introduce from "./pages/introduce/intro";
// import ThisIsAlert from "./components/core/alert";

function App() {
  // function ThisAlert() {
  //   alert("KLIK ME BITCH!");
  // }

  return (
    <>
      <NavBar />
      <Introduce name="Mustofa" />
      <Introduce name="Nurul Musthofa" />
      {/* <ThisIsAlert thisAlertHEHEHE={ThisAlert()} /> */}
      {/* <Button testAlert={AlertButton()} /> */}
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
