import Card from "../UI/Card";
import CallBack from "../CallBack/CallBack";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import {
  STATES,
  TELENGANA,
  KARNATAKA,
  MAHARASTRA,
  ANDHRAPRADESH,
  TAMILNADU,
} from "../Data/Data";
import AllServices from "./AllServices";
const StateOptions = STATES.map((state) => {
  const obj = { value: state, label: state };
  return obj;
});
var districtOptions = [];
const DashBoard = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const ChangeHandler = (event) => {
    switch (event.value) {
      case "TELENGANA":
        districtOptions = TELENGANA.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      case "KARNATAKA":
        districtOptions = KARNATAKA.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      case "TAMILNADU":
        districtOptions = TAMILNADU.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      case "MAHARASTRA":
        districtOptions = MAHARASTRA.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      case "ANDHRAPRADESH":
        districtOptions = ANDHRAPRADESH.map((district) => {
          const obj = { label: district, value: district };
          return obj;
        });
        break;
      default:
        districtOptions = [];
    }
    setSelectedState(event.value);
  };
  const navigate = useNavigate();
  const LogOutHandler = () => {
    navigate("/home");
  };

  return (
    <Card>
      <nav className="navbar navbar-dark bg-dark">
        <span></span>
        <img
          className="nav-item"
          src={require("../Images/smart_assist_mobile_logo.png")}
          alt={"mobile_logo"}
          style={{ width: 50, height: 50, align: "center", paddingLeft: "1px" }}
        ></img>
        <NavLink
          to="/mycart"
          style={{ color: "white", textDecoration: "none" }}
          className="nav-item"
        >
          My Cart
        </NavLink>
        <NavLink
          to="/ratethebookings"
          style={{ color: "white", textDecoration: "none" }}
          className="nav-item"
        >
          Rate the Bookings
        </NavLink>
        <NavLink
          to="/mybookings"
          style={{ color: "white", textDecoration: "none" }}
          className="nav-item"
        >
          My Bookings
        </NavLink>
        <NavLink
          to="/newprofessionalsignupform"
          style={{ color: "white", textDecoration: "none" }}
          className="nav-item"
        >
          Register as a Professional
        </NavLink>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={LogOutHandler}
        >
          Log Out
        </button>
        <span></span>
      </nav>
      <img
        className="nav-item"
        src={require("../Images/dashboard_pic.jpeg")}
        alt={"dashboard"}
        style={{ height: "60vh", width: "100%" }}
      ></img>
      <br></br>
      <div style={{ display: "flex", paddingBottom: "2%" }}>
        <div style={{ width: "30%", paddingLeft: "5%", paddingTop: "3%" }}>
          <Select
            defaultValue={selectedState}
            onChange={ChangeHandler}
            options={StateOptions}
          />
        </div>
        <div style={{ width: "30%", paddingLeft: "5%", paddingTop: "3%" }}>
          <Select
            defaultValue={selectedDistrict}
            onChange={setSelectedDistrict}
            options={districtOptions}
          />
        </div>
      </div>
      <AllServices />
      <CallBack />
    </Card>
  );
};
export default DashBoard;
