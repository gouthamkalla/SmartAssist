import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Reviews from "../Reviews/Reviews";
import FeedBack from "../FeedBack/FeedBack";
import Home from "../HomePage/Home";
import Login from "../Login/Login";
import OurServices from "../OurServices/OurServices";
import DashBoard from "../DashBoard/DashBoard";
import MyCart from "../MyCart/MyCart";
import MyBookings from "../MyBookings/MyBookings";
import RateBooking from "../MyBookings/RateBooking";
import NewProfessional from "../NewProfessional/NewProfessional";
import BookingForm from "../MyBookings/BookingForm";
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
      <Route exact path="/mycart" element={<MyCart/>}/>
      <Route exact path="/mybookings" element={<MyBookings/>}/>
      <Route exact path="/ratethebookings" element={<RateBooking/>}/>
      <Route exact path="/newprofessionalsignupform" element={<NewProfessional/>}/>
      <Route exact path="/form" element={<BookingForm/>}/>
    </Routes>
  );
};
export default SmartAssist;
