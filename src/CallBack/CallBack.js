import styled from "styled-components";
import { TS_CITIES, TN_CITIES, MH_CITIES, AP_CITIES } from "../Data/Data";
import Footer from "./Footer";

const Header = styled.h4`
  color: #ffffff;
  padding-top: 1%;
  padding-bottom: 1%;
`;
const Form = styled.div`
  background-color: #212529;
`;
const State = styled.h6`
  color: #ffffff;
  margin-right: 1%;
`;
const City = styled.h6`
  color: #ffffff;
  padding: 0.75%;
`;
const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CallBack = () => {
  return (
    <Form>
      <Header>We are serving in</Header>
      <State>Telangana</State>
      <RowContainer>
        {TS_CITIES.map((data) => {
          return <City>{data}</City>;
        })}
      </RowContainer>
      <hr style={{ color: "#ffffff" }}></hr>
      <State>Andhra Pradesh</State>
      <RowContainer>
        {AP_CITIES.map((data) => {
          return <City>{data}</City>;
        })}
      </RowContainer>
      <hr style={{ color: "#ffffff" }}></hr>
      <State>TamilNadu</State>
      <RowContainer>
        {TN_CITIES.map((data) => {
          return <City>{data}</City>;
        })}
      </RowContainer>
      <hr style={{ color: "#ffffff" }}></hr>
      <State>Maharastra</State>
      <RowContainer>
        {MH_CITIES.map((data) => {
          return <City>{data}</City>;
        })}
      </RowContainer>
      <hr style={{ color: "#ffffff" }}></hr>
      <Footer />
    </Form>
  );
};
export default CallBack;
