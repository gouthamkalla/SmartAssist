import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Reviews from "../Reviews/Reviews";
import FeedBack from "../FeedBack/FeedBack";
import Home from "../HomePage/Home";
import Login from "../Login/Login";
import OurServices from "../OurServices/OurServices";
import DashBoard from "../DashBoard/DashBoard";
const SmartAssist = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/services" element={<OurServices />} />
      <Route exact path="/reviews" element={<Reviews />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/feedback" element={<FeedBack />} />
      <Route exact path="/dashboard" element={<DashBoard/>}/>
    </Routes>
  );
};
export default SmartAssist;
