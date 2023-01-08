import Card from "../UI/Card";
import {
  STATES,
  BOOKINGS
} from "../Data/Data";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();

  const submitHandler = () => {
    alert(
      "Thank you placing order with us all the details regarding the booking will be sent as SMS to your regstered mobile number"
    );
    navigate("/dashboard");
  };

  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <div
          style={{
            paddingLeft: "40%",
            paddingTop: "3%",
            width:"100vw"
          }}
        >
          <form>
            <table cellPadding="15%">
              <tbody>
                <tr>
                  <td>
                    <label>First Name:</label>
                  </td>
                  <td>
                    <input type="text" required></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>LastName:</label>
                  </td>
                  <td>
                    <input type="text" required></input>
                  </td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    <textarea required></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Phone Number:</td>
                  <td>
                    <input type="tel" required></input>
                  </td>
                </tr>
                <tr>
                  <td>Email Address:</td>
                  <td>
                    <input type="email" required></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={submitHandler}
                    >
                      Place Order
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </Card>
  );
};
export default BookingForm;
