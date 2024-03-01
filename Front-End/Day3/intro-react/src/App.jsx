// import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/core/navbar";
import Footer from "./components/core/footer";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
