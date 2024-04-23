import React from "react";
import Group from "../GrpIcon/group";
import "./Group.module.css";

const Groupcomp = ({ open }) => {
  return (
    <div className="leftcontainer">
      <h1 className="h1tagofGroupcomp" style={{ marginTop: "35px" }}>
        Pocket Notes
      </h1>
      <Group />
      <div className="circlebutton">+</div>
    </div>
  );
};

export default Groupcomp;
