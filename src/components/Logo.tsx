import logo from "../assets/logo.svg";

function Logo() {
  return (
    <img
      src={logo}
      alt="Jennifer Creates Logo"
      className="h-12 w-12 transition duration-300 hover:scale-105"
    />
  );
}

export default Logo;