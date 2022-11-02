import { NavLink, useNavigate} from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
    const LoginHandler=(event)=>{
        event.preventDefault();
        navigate("/login");
    }
  return (
    <nav className="navbar navbar-dark bg-dark">
    <span></span>
      <img
        className="nav-item"
        src={require("../Images/smart_assist_mobile_logo.png")}
        alt={"mobile_logo"}
        style={{ width: 50, height: 50, align: "center" ,paddingLeft:"1px"}}
        
      ></img>
      <NavLink
        to="/about"
        style={{ color: "white", textDecoration: "none" }}
        className="nav-item"
      >
        About Us
      </NavLink>
      <NavLink
        to="/services"
        style={{ color: "white", textDecoration: "none" }}
        className="nav-item"
      >
        Our Services
      </NavLink>
      <NavLink
        to="/faq"
        style={{ color: "white", textDecoration: "none" }}
        className="nav-item"
      >
        FAQ's
      </NavLink>
      <NavLink
        to="/contact"
        style={{ color: "white", textDecoration: "none" }}
        className="nav-item"
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/feedback"
        style={{ color: "white", textDecoration: "none" }}
        className="nav-item"
      >
        FeedBack
      </NavLink>
      <button type="submit" className="btn btn-primary" onClick={LoginHandler}>
        Login / Sign Up
      </button>
      <span></span>
    </nav>
  );
};
export default Home;
