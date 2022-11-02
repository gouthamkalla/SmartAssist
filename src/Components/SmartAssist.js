import { Navigate, Route,Routes } from "react-router-dom";
import Home from "../HomePage/Home";
import Login from "../Login/Login";
const SmartAssist = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Navigate to="/home"/>}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};
export default SmartAssist;
