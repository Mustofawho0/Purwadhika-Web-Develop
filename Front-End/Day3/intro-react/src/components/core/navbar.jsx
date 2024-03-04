// import styled from "styled-components";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          height: "30px",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="flex space-y-0.5  items-center text-2xl text-black">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/login">
            <span>Login</span>
          </Link>
          <Link to="/css">
            <span>Tailwind</span>
          </Link>
        </div>
      </div>
    </>
  );
}
