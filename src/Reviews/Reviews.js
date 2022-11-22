import React from "react";
import { REVIEW_DATA } from "../Data/Data";
import styled from "styled-components";

const Container = styled.div`
  display: "flex";
  flex: 1;
  flex-direction: "column";
  flex-wrap: "wrap";
`;
const Item = styled.div`
  padding: 1%;
  line-height: "5rem";
  margin-left: 15%;
`;
const Reviews = () => {
  return (
    <Container>
      {REVIEW_DATA.map(({ Username, Rating, Comments }) => {
        return (
          <Item>
            <div>
              <img
                className="user "
                src={require("../Images/user.png")}
                alt={"user"}
                style={{ height: 40 }}
              />
            </div>
            <div>
              <h5>Username:{Username}</h5>
              <strong>
                <h6>Rating:{Rating}/5</h6>
              </strong>
              <h6>Comments:{Comments}</h6>
            </div>
          </Item>
        );
      })}
    </Container>
  );
};
export default Reviews;
