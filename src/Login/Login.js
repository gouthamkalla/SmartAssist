const Login = () => {
  return (
    <div>
      <img
        className="crm_logo"
        src={require("../Images/smart-assist.png")}
        alt={"Logo"}
        style={{ width: 150, height: 150, alignContent: "center" }}
      />
      <form>
        <div className="username-label">
          <label>Username:</label>
        </div>
        <div className="username-textbox">
          <input type="text"></input>
        </div>
      </form>
    </div>
  );
};
export default Login;
