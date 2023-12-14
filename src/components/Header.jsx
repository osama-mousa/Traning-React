import "./Header.css";
import Navbar from "./Navbar";


function getMenu() {

}

function Header({ title, description }) {
  return (
    <>
      <header>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
    </>
  );
}

export default Header;
