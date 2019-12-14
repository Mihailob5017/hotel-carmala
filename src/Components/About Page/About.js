import React from "react";
import NavLink from "../Helper/Link";
import {
  FaDog,
  FaCoffee,
  FaDumbbell,
  FaGuitar,
  FaSwimmingPool,
  FaCocktail,
  FaGamepad,
  FaRunning,
  FaTv,
  FaDoorOpen
} from "react-icons/fa";
import { GiKnifeFork, GiWaveSurfer } from "react-icons/gi";
const About = () => {
  return (
    <>
      <div className="about-page-bg-container">
        <img
          className="about-page-bg"
          src={require("../../Images/generic-about-background.jpg")}
          alt="bs"
        />
      </div>
      <NavLink />
      <div className="about-page-services-container">
        <h1 className="services-logo">Our Services Include</h1>
        <div className="about-page-services">
          <div className="service-single">
            <GiWaveSurfer />
            Beach Equipment
          </div>
          <div className="service-single">
            <FaGuitar />
            Evening Music
          </div>
          <div className="service-single">
            <FaSwimmingPool />
            Pool 24/7
          </div>
          <div className="service-single">
            <FaGamepad />
            Game Room
          </div>
          <div className="service-single">
            <FaCocktail />
            Free Cocktails
          </div>
          <div className="service-single">
            <GiKnifeFork />
            Lunch
          </div>
          <div className="service-single">
            <FaDumbbell />
            Gym
          </div>
          <div className="service-single">
            <FaTv />
            Cinema
          </div>
          <div className="service-single">
            <FaCoffee />
            Breakfast
          </div>
          <div className="service-single">
            <FaDog />
            Pets Allowed
          </div>
          <div className="service-single">
            <FaRunning />
            Activities
          </div>
          <div className="service-single">
            <FaDoorOpen />
            Room Service
          </div>
        </div>
      </div>
      <div className="about-page-history">
        <h1>History</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa
          officia, odio optio quis voluptatum, voluptatem laborum corporis sequi
          similique consequatur? Iste magni, assumenda tenetur repellendus
          officiis neque commodi aliquid? Dolor itaque, debitis natus ducimus
          asperiores illo id facere at quam pariatur facilis a? Harum omnis cum
          aliquid id provident soluta voluptas blanditiis. Et consequuntur
          mollitia ducimus consectetur quas illum! Veniam ab ut, magni similique
          maiores, exercitationem enim laudantium laboriosam ipsum cum sunt
          culpa dolores quos laborum, ratione porro minus? Ut modi labore nulla
          unde facilis eum magni iste voluptatem? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corporis facere rem, labore veniam
          maxime nihil. Magni sequi dolore, culpa corrupti quasi quaerat
          expedita fugiat necessitatibus, repudiandae commodi, officiis error
          voluptatum.
        </p>
      </div>
      <div className="about-in-general">
        <h1>In Short</h1>
        <p className="slideup-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eaque
          nulla accusantium eveniet facilis nobis ex et animi beatae perferendis
          minima fugiat, repellat ipsa aspernatur. Id sequi repellendus sint
          voluptate!
        </p>
      </div>
    </>
  );
};

export default About;
