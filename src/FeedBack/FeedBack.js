import React from "react";
import "./FeedBack.css";
import { useNavigate } from "react-router-dom";
const FeedBack = () => {
  const navigate=useNavigate();
  const feedbackSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/home")
    alert("Your Feedback submitted successfully....")
  };
  return (
    <div className="FeedBackForm">
      <h1>How Far did you like Us</h1>
      <br />
      <br />
      <h3>Rate Us:</h3>
      <br></br>
      <input
        type="number"
        min="1"
        max="10"
        style={{ width: "8%", height: "4rem", fontSize: "2.5rem" }}
      ></input>
      <br></br>
      <h4>(out of 10)</h4>
      <br />
      <br />
      <h2>Drop your valuable suggestions below:</h2>
      <textarea style={{ height: "10rem", width: "34vw" }}></textarea>
      <br />
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={feedbackSubmitHandler}
      >
        Submit FeedBack
      </button>
    </div>
  );
};
export default FeedBack;
