import { CART } from "../DashBoard/AllServices";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const navigate = useNavigate();
  const cancelBookingHandler = () => {
    alert("Are you sure to cancel your order");
    navigate("/dashboard");
  };
  const bookOrderHandler = () => {
    navigate("/form");
  };
  console.log(CART);
  return (
    <Card>
      <div
        style={{ color: "white", backgroundColor: "#212529", padding: "2%" }}
      >
        <center>
          <h1>Your Cart</h1>
        </center>
        <br></br>
        <ul style={{ listStyleType: "none" }}>
          {CART.map((cartitem) => {
            return (
              <li key={Math.random().toString()}>
                <CartItem data={cartitem} />
              </li>
            );
          })}
        </ul>
        <center>
          <button
            className="btn btn-primary"
            style={{ margin: "2%" }}
            onClick={bookOrderHandler}
          >
            Proceed with the booking
          </button>
          <button className="btn btn-primary" onClick={cancelBookingHandler}>
            Cancel Booking
          </button>
        </center>
      </div>
    </Card>
  );
};
export default MyCart;
