import React, { useState, useEffect, useContext } from "react";
import RoomsContext from "../../Context API/Rooms Context/RoomsContext";
import "../Helper/Link";
import Rooms from "./Rooms";
import Icons from "./Icons";
//components
import LoadingScreen from "./LoadingScreen";
import Link from "../Helper/Link";
const Home = () => {
  const context = useContext(RoomsContext);
  const [isLoading, setLoaded] = useState(
    context.areRoomsLoaded ? false : true
  );
  if (!context.areRoomsLoaded) context.loadFrontImages();
  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 5000);
  }, []);
  //load premium images

  return (
    <div  className="homepage-background">
      <Link />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Icons />
          <Rooms />
        </div>
      )}
    </div>
  );
};

export default Home;
