import { RATING_BOOKINGS } from "../Data/Data";
import Card from "../UI/Card";
import RateBookingDisplayList from "./RateBookingDisplayList";
import "./MyBookings.css";
const RateBooking=()=>{
    return (<Card>
        <ul style={{ listStyleType: "none" }}>
          {RATING_BOOKINGS.map((data) => {
            return (
              <div className="item">
                <li style={{ backgroundColor: "#212529", padding: "2%" }}>
                  <RateBookingDisplayList bookingdata={data} />
                </li>
              </div>
            );
          })}
        </ul>
      </Card>)
}
export default RateBooking;