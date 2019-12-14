import React from "react";
import {
  FaSwimmingPool,
  FaCocktail,
  FaDumbbell,
  FaWifi,
  FaHotTub,
  FaTv,
  FaCoffee,
  FaDog,
  FaPizzaSlice
} from "react-icons/fa";
import { MdRoomService, MdAcUnit } from "react-icons/md";
const Includes = ({ includes }) => {
  return (
    <div className="room-page-includes">
      <h3 className="room-properties">Services Included :</h3>
      <div className="room-list">
        <div className="room-page-listitem">
          <MdRoomService />
          <span>Room Service</span>
        </div>
        <div className="room-page-listitem">
          <FaSwimmingPool />
          <span> Pool 24/7</span>
        </div>
        <div className="room-page-listitem">
          <FaCocktail /> <span>Free Cocktails</span>
        </div>
        <div className="room-page-listitem">
          <FaDumbbell />
          <span>Gym</span>
        </div>
        <div className="room-page-listitem">
          <MdAcUnit />
          <span>AC</span>
        </div>
        {includes.map((__item, i) => {
          if (__item === "Wifi")
            return (
              <div key={i} className="room-page-listitem">
                <FaWifi />
                <span>{__item}</span>
              </div>
            );
          else if (__item === "Hot Tub")
            return (
              <div key={i} className="room-page-listitem">
                <FaHotTub />
                <span>{__item}</span>
              </div>
            );
          else if (__item === "Breakfast")
            return (
              <div key={i} className="room-page-listitem">
                <FaCoffee />
                <span>{__item}</span>
              </div>
            );
          else if (__item === "Lunch")
            return (
              <div key={i} className="room-page-listitem">
                <FaPizzaSlice />
                <span>{__item}</span>
              </div>
            );
          else if (__item === "Pets")
            return (
              <div key={i} className="room-page-listitem">
                <FaDog />
                <span>{__item}</span>
              </div>
            );
          else if (__item === "TV")
            return (
              <div key={i} className="room-page-listitem">
                <FaTv />
                <span>{__item}</span>
              </div>
            );
          else return "";
        })}
      </div>
    </div>
  );
};

export default Includes;
