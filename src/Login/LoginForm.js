import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const navigate=useNavigate();
  const formHandler = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div style={{paddingLeft:"40%",paddingTop:"4%",color:"white",backgroundColor:"#212529",height:"100vh"}}>
      <img
        className="smart_assist_logo"
        src={require("../Images/smart-assist-circle.jpg")}
        alt={"Logo"}
        style={{ width: 150, height:150, alignContent: "center",borderRadius:"100%", }}
      />
      <form onSubmit={formHandler}>
        <div className="username-label">
          <label style={{ fontSize: "20px", fontColor: "black" }}>
            <h2>Username:</h2>
          </label>
        </div>
        <br></br>
        <div className="username-textbox">
          <input
            type="email"
            required
            placeholder="smart_assist@gmail.com"
            style={{ width: "30%", height: "2.5rem" }}
          ></input>
        </div>
        <br></br>
        <div className="password-label">
          <label style={{ fontSize: "20px", fontColor: "black" }}>
            <h2>Password:</h2>
          </label>
        </div>
        <br></br>
        <div className="password-textbox">
          <input
            type="password"
            minLength={6}
            pattern={
              "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
            }
            placeholder="password"
            required
            style={{ width: "30%", height: "2.5rem" }}
          ></input>
        </div>
        <br />
        <div >
          <button type="submit" className="btn btn-primary" style={{width:"10%"}}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
