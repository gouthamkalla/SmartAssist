import React from "react";
import styled from "styled-components";

const Header = styled.div`
  margin: 3% 3% 0% 3%;
  padding: 5%;
  border: 1px solid black;
  height: 10%;
  background-color: #212529;
`;
const Text = styled.h1`
  color: white;
  font-family: "Tangerine", serif;
  font-size: 60px;
`;
const Information = styled.div`
  background-color: #eeeeee;
  margin: 3%;
  margin-top: 0%;
`;
const Info = styled.h4`
  line-height: 3rem;
`;
const KeyPeople = styled.div`
  margin: 3%;
  border: 1px solid black;
  height: 5%;
  background-color: #212529;
`;
const AboutUs = () => {
  return (
    <div>
      <Header>
        <center>
          <Text>About Us</Text>
        </center>
      </Header>
      <Information>
        <Info>
          We are a team of professionals committed to developing a business
          model which is both available and affordable by an average person to
          get there things done. Our approach is unique and one of its kind. We
          have a dedicated team that work for the Customer Satisfaction and our
          customer support is available 24x7 and we are growing at a Good pace.
          We hope you like our service
        </Info>
      </Information>
      <KeyPeople>
        <center>
          <Text>Key People</Text>
        </center>
      </KeyPeople>
      <div className="row" style={{ padding: "3%" }}>
        <div className="col col-sm-4">
          <center>
            <h5>Founder:</h5>
          </center>
          <center>
            <h6>Goutham</h6>
          </center>
          <center>
            <img
              className="founder"
              src={require("../Images/founder.png")}
              alt={"Founder"}
              style={{ height: "150px" }}
            />
          </center>
        </div>
        <div className="col col-sm-4">
          <center>
            <h5>Director:</h5>
          </center>
          <center>
            <h6>Manovikas</h6>
          </center>
          <center>
            <img
              className="director"
              src={require("../Images/director.png")}
              alt={"Director"}
              style={{ height: "150px" }}
            />
          </center>
        </div>
        <div className="col col-sm-4">
          <center>
            <h5>Executive Officer:</h5>
          </center>
          <center>
            <h6>Shantan</h6>
          </center>
          <center>
            <img
              className="KeyPeople"
              src={require("../Images/keypeople.gif")}
              alt={"KeyPeople"}
              style={{ height: "150px" }}
            />
          </center>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
