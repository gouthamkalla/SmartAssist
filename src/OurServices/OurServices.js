import React from "react";
import Card from "../UI/Card";
import Text from "../Text/Text";
import "./OurServices.css";

const OurServices = () => {
  return (
    <Card>
      <div className="allServices">
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/Delivery.png")}
              alt={"delivery"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">Package Delivery</Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                Did you forget anything....? Then dont worry grab your mobile
                and tell us and we deliver your package within 30 mins from
                anywhere in the city as we have a large network*
              </h6>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/laundry.png")}
              alt={"laundry"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">Laundry</Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                Get amazing offers on laundry we are collaborated with more than
                300+ washerman in every city which provide endless service to
                get your clothes washed and ironed also{" "}
              </h6>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/gardening.png")}
              alt={"gardening"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">Gardening</Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                We will take care of all gardening works like watering plants,
                cleaning the garden and also cutting so that your garden looks
                clean.
              </h6>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/appliancesWashing.png")}
              alt={"appliance_maintenance"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">
                  Complete Appliance Maintenance
                </Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                We provide all services like repair , clean and service of all
                electrical appliances like TV, Refrigirator, AC etc..,
              </h6>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/carpetCleaning.png")}
              alt={"carpetCleaning"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">Interior Designing</Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                We provide decoration services to all occasions performed in
                your home which make your home look beautiful.
              </h6>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/painting.png")}
              alt={"Painting"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">Painting</Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                We have a large network of Painters and we provide all painting
                services any where in the city.
              </h6>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/washing.png")}
              alt={"washing"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">House Grooming and Washing</Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                We provide washing services. we wash floor, walls, rooms and
                water tanks and sump tanks also.
              </h6>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/washingDishes.png")}
              alt={"washingDishes"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">Washing Dishes</Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                We not only wash the parts of your home but also we wash the
                dishes that were left after eating in your home.
              </h6>
            </div>
          </div>
        </div>
        <div className="serviceContainer">
          <center>
            <img
              className="serviceImage"
              src={require("../Images/bike.png")}
              alt={"bike"}
              style={{ height: 100 }}
            />
          </center>
          <div className="service">
            <div className="serviceHeading">
              <center>
                <Text className="serviceName">Delivering Essentials</Text>
              </center>
            </div>
            <div className="serviceInfo">
              <h6 className="info">
                Did you forget to buy anything. Let us know we shop on your
                behalf and deliver it to you.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default OurServices;
