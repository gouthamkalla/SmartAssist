const BookingDisplayList = (props) => {
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
          Amount:<h3>Rs.{props.bookingdata.totalamount}</h3>
        </div>
      </div>
    </div>
    
  );
};
export default BookingDisplayList;
