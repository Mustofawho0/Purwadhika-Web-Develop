import Button from "../../components/core/button";
// import NavBar from "../../components/core/navbar";
import '../../components/core/navbar.css'
function HomePage() {
  return (
    <>
      {/* <NavBar /> */}
      <h1>Home Page!</h1>
      <Button text="Button Home" page="home" />
    </>
  );
}
export default HomePage;
