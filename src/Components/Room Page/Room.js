import React, { useState } from "react";
import Includes from "./Includes";
import { Link } from "react-router-dom";
import { CheckRoute } from "../Helper/Helpers";
import { FaClock, FaBed, FaCheck } from "react-icons/fa";
import { useLastLocation } from "react-router-last-location";
const Room = ({ roomData }) => {
  const [isBooked, Book] = useState(false);
  const loc = useLastLocation();
  const { id, location, premium, image1, includes, price, people } = roomData;
  return (
    <>
      <img
        alt="bullshit"
        src={require("../../Images/generic-room-background.jpg")}
        className="background-room-page"
      />
      <div className="room-page">
        <div className="room-page-upper">
          <div className="room-page-flex">
            <h3 className="room-page-header">Room Location: {location}</h3>
            <div
              className={premium ? "room-page-premium" : "room-page-premium"}
            >
              {premium ? "PREMIUM" : "REGULAR"}
            </div>
          </div>
          <div className="room-middle">
            <img className="room-page-image" src={image1} alt={"room " + id} />
            <div className="main-info">
              <div className="room-page-price">
                From <span>{price}$</span> Per Night
              </div>
              <div className="room-page-check">
                Check-In: 12:00PM <FaClock />
              </div>
              <div className="room-page-check">
                Check-Out: 2:00PM
                <FaClock />
              </div>
              <div className="room-page-check">
                Number of Beds: {people}
                <FaBed />
              </div>
              <button
                onClick={() => Book(true)}
                disabled={isBooked ? true : false}
                className={!isBooked ? "room-page-book" : "room-page-booked"}
              >
                {!isBooked ? "Book" : "Booked"}
                {isBooked && <FaCheck className="checked-circle" />}
              </button>
            </div>
          </div>
          <div className="room-page-back">
            <Includes includes={includes} />

            <Link
              className="go-back"
              to={CheckRoute(loc.pathname) ? "/" : "/search"}
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
