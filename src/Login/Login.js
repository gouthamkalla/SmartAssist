import Card from "../UI/Card";
import "./Login.css";
const Login = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <div className="text-center login">
        <img
          className="crm_logo"
          src={require("../Images/smart-assist-circle.jpg")}
          alt={"Logo"}
          style={{ width: 150, height: 150, alignContent: "center" }}
        />
        <form onSubmit={submitHandler}>
          <div className="username-label">
            <label style={{ fontSize: "20px", fontColor: "black" }}>
              Username:
            </label>
          </div>
          <div className="username-textbox">
            <input
              type="text"
              required
              placeholder="smart_assist@gmail.com"
              style={{ width: "20%", height: "10%" }}
            ></input>
          </div>
          <div className="password-label">
            <label style={{ fontSize: "20px", fontColor: "black" }}>
              Password:
            </label>
          </div>
          <div className="password-textbox">
            <input
              type="password"
              minLength={6}
              pattern={
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              }
              placeholder="password"
              required
              style={{ width: "20%", height: "10%" }}
            ></input>
          </div>
          <br />
          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};
export default Login;
