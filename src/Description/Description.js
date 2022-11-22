import React from "react";
import Card from "../UI/Card";
import "./Description.css";
import Text from "../Text/Text";
const Description = () => {
  return (
    <Card>
      <div className="text-center question">
        <h1> Why Smart Assist?</h1>
      </div>
      <div className="descriptionContainer">
        <div className="descriptionItemContainer">
          <div className="descriptionItem">
            <img
              className="Experts"
              src={require("../Images/expert.png")}
              alt={"Experts"}
            />
            <div className="description">
              <div className="descriptionItemHeading experts">
                <Text className="headingText">Experts Only</Text>
              </div>
              <div className="descriptionItemInformation experts">
                <h6>
                  Our Professionals are trained and they are on-job expertise
                </h6>
              </div>
            </div>
          </div>
          <div className="descriptionItem">
            <img
              className="Billing"
              src={require("../Images/bill.png")}
              alt={"Transparent Billing"}
            />
            <div className="description">
              <div className="descriptionItemHeading">
                <Text>Transparent Billing</Text>
              </div>
              <div className="descriptionItemInformation">
                <h6>Check the prices before you book. No hidden charges</h6>
              </div>
            </div>
          </div>
          <div className="descriptionItem">
            <img
              className="OnlineSupport"
              src={require("../Images/online-support.png")}
              alt={"Online Support"}
            />
            <div className="description">
              <div className="descriptionItemHeading">
                <Text>24x7 Online Support</Text>
              </div>
              <div className="descriptionItemInformation">
                <h6>We have a great team to assist you any time.</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="Approval">
          <img
            className="tick"
            src={require("../Images/approval.png")}
            alt={"Approval"}
          />
          <div style={{ paddingLeft: "6%", paddingBottom: "5%" }}>
            <Text>100% Quality Assured and Certified.</Text>
            <h5>
              we are certified service providers and we assure if you dont like
              our work we provide Refund.
            </h5>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Description;
