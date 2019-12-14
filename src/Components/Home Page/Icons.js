import React from "react";
import { FaStar } from "react-icons/fa";

const Icons = () => {
  return (
    <>
      <div className="logo">
        <h2 className="header">Hotel Carmila</h2>
        <div className="stars">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>
      </div>
      <h4 className="frontText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iure
        neque, hic distinctio atque deserunt sint quam cumque a qui ex provident
        laborum quod aspernatur sapiente ipsa similique incidunt unde.
      </h4>
    </>
  );
};

export default Icons;
