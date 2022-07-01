import React from "react";
import { Container } from "react-bootstrap";
import Goal from "./Goal";

const Topview = () => {
  return (
    <Container
      style={{ paddingLeft: "0px", paddingRight: "0px", maxWidth: "100%" }}
    >
      <div className="head-things">
        <video className="top" autoPlay muted loop>
          <source
            src={require("../morning-yoga.mov")}
            //  src = "./media/video/morning-yoga.mov"
            type="video/mp4"
          />
        </video>
        <div className="set-text">
          <img
            src="./media/images/yoga.png"
            style={{ height: "100px" }}
            alt="..."
          />
          <h1>India's largest online yoga institute</h1>
          <button className="btn btn-success btn-lg">Join now</button>
        </div>
      </div>
      <Goal />
    </Container>
  );
};

export default Topview;
