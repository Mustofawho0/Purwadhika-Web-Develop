// import "./App.css";
// import Button from "./components/core/button";
// import ThisIsAlert from "./components/core/alert";
import { Outlet } from "react-router-dom";
import NavBar from "./components/core/navbar";
import Footer from "./components/core/footer";
import Introduce from "./pages/introduce/intro";

function App() {
  return (
    <>
      <NavBar />
      <Introduce name="Mustofa" />
      <Introduce name="Nurul Musthofa" />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
// function ThisAlert() {
//   alert("KLIK ME!");
// }
{
  /* <ThisIsAlert thisAlertHEHEHE={ThisAlert()} /> */
}
{
  /* <Button testAlert={AlertButton()} /> */
}
