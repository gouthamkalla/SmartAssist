import { Link } from "react-router-dom";
import styled from "styled-components";
const Item = styled.div`
  border-radius: 8%;
  padding: 1%;
  background-color: #e8e8e8;
  margin:1%;
`;

const AllServices = () => {
  return (
    <div style={{ display: "flex",flexWrap:"wrap", padding: "1%" }}>
      <Item>
        <Link to={"/ac-repair"}>
          <img
            className="ac-repair"
            src={require("../Images/ac.png")}
            alt={"A/C"}
          />
        </Link>
        <h6>A/C Repair</h6>
      </Item>
      <Item>
        <Link to={"/electricial-services"}>
          <img
            className="electrical-seervices"
            src={require("../Images/electrician.png")}
            alt={"electrical-plug"}
          />
        </Link>
        <h6>Electrical Works</h6>
      </Item>
      <Item>
        <Link to={"/home-salon-services"}>
          <img
            className="home-salon-services"
            src={require("../Images/homesalon.png")}
            alt={"Home-Salon"}
          />
        </Link>
        <h6>Home salon Services</h6>
      </Item>
      <Item>
        <Link to={"/pest-control"}>
          <img
            className="pest-control"
            src={require("../Images/pestcontrol.png")}
            alt={"pestControl"}
          />
        </Link>
        <h6>Pest Control Services</h6>
      </Item>
      <Item>
        <Link to={"/plumbing-services"}>
          <img
            className="plumbing-services"
            src={require("../Images/plumber.png")}
            alt={"Plumber"}
          />
        </Link>
        <h6>Plumbers</h6>
      </Item>
      <Item>
        <Link to={"/kitchen-cleaning"}>
          <img
            className="kitchen-cleaning"
            src={require("../Images/washingsink.png")}
            alt={"Washing Sink"}
          />
        </Link>
        <h6>Kitchen Cleaning Services</h6>
      </Item>
      <Item>
        <Link to={"/water-tank-cleaning"}>
          <img
            className="water-tank-cleaning"
            src={require("../Images/watertank.png")}
            alt={"Water Tank Cleaning"}
          />
        </Link>
        <h6>Water Tank Cleaning</h6>
      </Item>
      <Item>
        <Link to={"/laundry"}>
          <img
            className="laundry-services"
            src={require("../Images/laundry.png")}
            alt={"laundry"}
          />
        </Link>
        <h6>Laundry Services</h6>
      </Item>
      <Item>
        <Link to={"/appliance-washing"}>
          <img
            className="Appliance-washing"
            src={require("../Images/appliancesWashing.png")}
            alt={"Appliance Maintenance"}
          />
        </Link>
        <h6>Appliances Maintenance</h6>
      </Item>
      <Item>
        <Link to={"/gardening-services"}>
          <img
            className="gardening"
            src={require("../Images/gardening.png")}
            alt={"Gardening"}
          />
        </Link>
        <h6>Gardening</h6>
      </Item>
      <Item>
        <Link to={"/painting-servies"}>
          <img
            className="Painting-services"
            src={require("../Images/painting.png")}
            alt={"Painting"}
          />
        </Link>
        <h6>Painting Services</h6>
      </Item>
      <Item>
        <Link to={"/washing-utensils"}>
          <img
            className="washing-dishes"
            src={require("../Images/washingDishes.png")}
            alt={"Washing Utensils"}
          />
        </Link>
        <h6>Washing Utensils</h6>
      </Item>
      <Item>
        <Link to={"/delivery-of-packages"}>
          <img
            className="delivery of packages"
            src={require("../Images/Delivery.png")}
            alt={"Delivery of Packages"}
          />
        </Link>
        <h6>Delivery of Packages</h6>
      </Item>
      <Item>
        <Link to={"/interior-design"}>
          <img
            className="Interior Design"
            src={require("../Images/carpetCleaning.png")}
            alt={"Interior designing"}
          />
        </Link>
        <h6>Interior Designing</h6>
      </Item>
    </div>
  );
};
export default AllServices;
