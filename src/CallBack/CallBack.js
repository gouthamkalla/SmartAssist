import styled from "styled-components";
import { TELENGANA,MAHARASTRA,TAMILNADU,ANDHRAPRADESH } from "../Data/Data";
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
        {TELENGANA.map((data) => {
          return <City>{data}</City>;
        })}
      </RowContainer>
      <hr style={{ color: "#ffffff" }}></hr>
      <State>Andhra Pradesh</State>
      <RowContainer>
        {ANDHRAPRADESH.map((data) => {
          return <City>{data}</City>;
        })}
      </RowContainer>
      <hr style={{ color: "#ffffff" }}></hr>
      <State>TamilNadu</State>
      <RowContainer>
        {TAMILNADU.map((data) => {
          return <City>{data}</City>;
        })}
      </RowContainer>
      <hr style={{ color: "#ffffff" }}></hr>
      <State>Maharastra</State>
      <RowContainer>
        {MAHARASTRA.map((data) => {
          return <City>{data}</City>;
        })}
      </RowContainer>
      <hr style={{ color: "#ffffff" }}></hr>
      <Footer />
    </Form>
  );
};
export default CallBack;
