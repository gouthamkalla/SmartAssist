const Footer = () => {
  return (
    <div
      style={{
        padding: "10px",
        marginLeft: "30px",
        display: "flex",
      }}
    >
      <img
        className="nav-item"
        src={require("../Images/smart_assist_mobile_logo.png")}
        alt={"mobile_logo"}
        style={{ width: 50, height: 50, align: "center", paddingLeft: "1px" }}
      ></img>
      <div
        style={{ marginLeft: "1%", display: "flex", flexDirection: "column" }}
      >
        <span style={{ color: "white" }}>©CopyRights reserved</span>
        <span style={{ color: "white" }}>@Version:1.0.1</span>
      </div>
      <span style={{ color: "white", marginLeft: "50%" }}>
        Our Application will be soon available in Play Store and App Store
      </span>
    </div>
  );
};
export default Footer;
