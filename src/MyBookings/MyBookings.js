import { BOOKINGS } from "../Data/Data";
import Card from "../UI/Card";
import BookingDisplayList from "./BookingDisplayList";
import "./MyBookings.css";

const MyBookings = () => {
  return (
    <Card>
      <ul style={{ listStyleType: "none" }}>
        {BOOKINGS.map((data) => {
          return (
            <div className="item">
              <li style={{ backgroundColor: "#212529", padding: "2%" }}>
                <BookingDisplayList bookingdata={data} />
              </li>
            </div>
          );
        })}
      </ul>
    </Card>
  );
};
export default MyBookings;
