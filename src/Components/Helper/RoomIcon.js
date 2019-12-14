import React from "react";
import { Link } from "react-router-dom";
const RoomIcon = ({ room }) => {
  return (
    <div className="room">
      <img className="room-img" src={room.image1} alt={room.loaction} />
      <div className="room-btn">
        <Link to={`/${room.id}`} style={{ textDecoration: "none" }}>
          View
        </Link>
      </div>
    </div>
  );
};

export default RoomIcon;
