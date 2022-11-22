import styled from "styled-components";
import Text from "../Text/Text";
import "./OurAdditionalFeature.css";

const AdditionalFeature = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-wrap: wrap;
  padding: 3%;
`;

const OurAdditionalFeature = () => {
  return (
    <AdditionalFeature>
      <div className="AdditionalItemContainer">
        <img
          className="Package"
          src={require("../Images/bike.png")}
          alt={"Package"}
        />
        <div className="feature">
          <div className="featureHeading">
            <Text className="featureDescription">Package Delivery</Text>
          </div>
          <div className="featureInformation">
            <h6>We deliver all your packages safely and on Time</h6>
          </div>
        </div>
      </div>
      <div className="AdditionalItemContainer">
        <img
          className="Captain"
          src={require("../Images/captain.png")}
          alt={"captain"}
        />
        <div className="feature">
          <div className="featureHeading">
            <Text className="featureDescription">Available Captains</Text>
          </div>
          <div className="featureInformation">
            <h6>Captains are available at any time of the day</h6>
          </div>
        </div>
      </div>
    </AdditionalFeature>
  );
};
export default OurAdditionalFeature;
