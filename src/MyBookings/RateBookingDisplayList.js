import { useState } from "react";
const RateBookingDisplayList = (props) => {
    const [rating,setrating]=useState();
    const rateSubmitHandler=(event)=>{
        event.preventDefault();
        props.bookingdata.rating=rating;
    }
  return (
    <div style={{ width: "80vw", padding: "2%" }}>
      OrderId :<h6>#{props.bookingdata.id}</h6>
      Type:<h4>{props.bookingdata.type}</h4>
      <div style={{ display: "flex" }}>
        <div>
          Date:<h6>{props.bookingdata.bookingdate}</h6>
        </div>
        <div style={{ paddingLeft: "5%" }}>
          Time:<h6>{props.bookingdata.time}</h6>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          Mode of Payment:<h6>{props.bookingdata.modeofpayment}</h6>
        </div>
        <div style={{ paddingLeft: "85%" }}>
          Amount:<h6>Rs.{props.bookingdata.totalamount}</h6>
        </div>
      </div>
      <div style={{ paddingLeft: "95%" }}>
        {props.bookingdata.rating !== 0 && (
          <div>
            {" "}
            <h6>Rating:</h6>
            <h3>{props.bookingdata.rating}/10</h3>
          </div>
        )}
        {props.bookingdata.rating === 0 && (
          <div>
            <form>
            <input type="number" max="10" min="1" onChange={(e)=>{setrating(+e.target.value)}}></input>
            <br></br><br></br>
            <button type="submit" className="btn btn-primary" onClick={rateSubmitHandler} >Rate</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default RateBookingDisplayList;
