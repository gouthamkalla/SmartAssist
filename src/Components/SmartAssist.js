import { Navigate, Route,Routes } from "react-router-dom";
import Login from "../Login/Login";
const SmartAssist = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login"/>}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default SmartAssist;
