import React, { useContext } from "react";
import RoomIcon from "../Helper/RoomIcon";

import RoomsContext from "../../Context API/Rooms Context/RoomsContext";
const Rooms = () => {
  const context = useContext(RoomsContext);
  const { FrontPageRooms } = context;
  return (
    <div className="rooms">
      <h3 className="fetured_rooms">Fetured Rooms of the Day</h3>
      {FrontPageRooms.map((__room, i) => {
        return <RoomIcon key={i} room={__room} />;
      })}
    </div>
  );
};

export default Rooms;
