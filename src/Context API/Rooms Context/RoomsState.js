import React, { useReducer } from "react";
//components
import RoomsReducer from "./RoomsReducer";
import { includesMatch } from "../../Components/Helper/Helpers";
import RoomsContext from "./RoomsContext";
import {
  LOAD_FRONT_IMAGES,
  SET_FILTER_ROOMS,
  UNSET_FILTER_ROOMS,
  FILTER_ROOMS,
  LOAD_FILTER
} from "../Types";
const RoomsState = props => {
  const initalState = {
    rooms: [
      {
        id: "pr1",
        location: "Floor 1 Room 1",
        premium: true,
        image1: require("../../Images/Rooms/pr1-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "TV", "Hot tub", "Pets"],
        price: 500,
        people: 4
      },
      {
        id: "pr2",
        location: "Floor 1 Room 2",
        premium: true,
        image1: require("../../Images/Rooms/pr2-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "Hot tub"],
        price: 450,
        people: 5
      },
      {
        id: "pr3",
        location: "Floor 1 Room 3",
        premium: true,
        image1: require("../../Images/Rooms/pr3-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "Hot tub"],
        price: 450,
        people: 3
      },
      {
        id: "pr4",
        location: "Floor 1 Room 4",
        premium: true,
        image1: require("../../Images/Rooms/pr4-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "TV", "Pets"],
        price: 350,
        people: 4
      },
      {
        id: "pr5",
        location: "Floor 3 Room 3",
        premium: true,
        image1: require("../../Images/Rooms/pr5-1.jpg"),
        includes: ["Wifi", "Breakfast", "Hot tub"],
        price: 400,
        people: 3
      },
      {
        id: "pr6",
        location: "Floor 3 Room 4",
        premium: true,
        image1: require("../../Images/Rooms/pr6-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "TV", "Hot Tub", "Pets"],
        price: 650,
        people: 5
      },
      {
        id: "pr7",
        location: "Floor 4 Room 1",
        premium: true,
        image1: require("../../Images/Rooms/pr7-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "TV", "Pets"],
        price: 520,
        people: 5
      },
      {
        id: "pr8",
        location: "Floor 4 Room 2",
        premium: true,
        image1: require("../../Images/Rooms/pr8-1.jpg"),
        includes: ["Wifi", "Breakfast", "Hot tub"],
        price: 400,
        people: 4
      },
      {
        id: "pr9",
        location: "Floor 5 Room 3",
        premium: true,
        image1: require("../../Images/Rooms/pr9-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch"],
        price: 420,
        people: 2
      },
      {
        id: "pr10",
        location: "Floor 5 Room 4",
        premium: true,
        image1: require("../../Images/Rooms/pr10-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "TV"],
        price: 460,
        people: 3
      },
      {
        id: "rr1",
        location: "Floor 2 Room 1",
        premium: false,
        image1: require("../../Images/Rooms/rr1-1.jpg"),
        includes: ["Wifi", "Breakfast", "TV"],
        price: 250,
        people: 5
      },
      {
        id: "rr2",
        location: "Floor 2 Room 2",
        premium: false,
        image1: require("../../Images/Rooms/rr2-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "TV"],
        price: 300,
        people: 4
      },
      {
        id: "rr3",
        location: "Floor 2 Room 3",
        premium: false,
        image1: require("../../Images/Rooms/rr3-1.jpg"),
        includes: ["Wifi", "Breakfast", "Lunch", "Pets"],
        price: 200,
        people: 2
      },
      {
        id: "rr4",
        location: "Floor 2 Room 4",
        premium: false,
        image1: require("../../Images/Rooms/rr4-1.jpg"),
        includes: ["Wifi", "Breakfast", "Pets"],
        price: 250,
        people: 3
      },
      {
        id: "rr5",
        location: "Floor 3 Room 1",
        premium: false,
        image1: require("../../Images/Rooms/rr5-1.jpg"),
        includes: ["Wifi"],
        price: 150,
        people: 2
      },
      {
        id: "rr6",
        location: "Floor 3 Room 2",
        premium: false,
        image1: require("../../Images/Rooms/rr6-1.jpg"),
        includes: ["Wifi", "Pets"],
        price: 200,
        people: 2
      },
      {
        id: "rr7",
        location: "Floor 4 Room 3",
        premium: false,
        image1: require("../../Images/Rooms/rr7-1.jpg"),
        includes: ["Wifi", "TV", "Pets"],
        price: 250,
        people: 2
      },
      {
        id: "rr8",
        location: "Floor 4 Room 4",
        premium: false,
        image1: require("../../Images/Rooms/rr8-1.jpg"),
        includes: ["Wifi", "Breakfast", "TV", "Pets"],
        price: 300,
        people: 2
      },
      {
        id: "rr9",
        location: "Floor 5 Room 1",
        premium: false,
        image1: require("../../Images/Rooms/rr9-1.jpg"),
        includes: ["Wifi", "TV"],
        price: 220,
        people: 2
      },
      {
        id: "rr10",
        location: "Floor 5 Room 2",
        premium: false,
        image1: require("../../Images/Rooms/rr10-1.jpg"),
        includes: ["Wifi"],
        price: 150,
        people: 2
      }
    ],
    LoadedRooms: [],
    areRoomsLoaded: false,
    areRoomsFiltred: false,
    filteredRooms: [],
    filter: {}
  };

  //
  const [state, dispatch] = useReducer(RoomsReducer, initalState);

  //reducer funtions

  //load Homepage Images
  const loadFrontImages = () => {
    const randomNum = Math.floor(
      Math.random() * (initalState.rooms.length - 3)
    );
    const array = [...state.rooms];
    if (initalState.areRoomsLoaded === false)
      dispatch({
        type: LOAD_FRONT_IMAGES,
        payload: array.splice(randomNum, 3)
      });
  };
  //filter the data
  const filterRooms = paramObj => {
    setFilter();
    const filteredObjs = initalState.rooms.filter(__room => {
      if (paramObj.includes.length > 0)
        return (
          __room.premium === paramObj.premium &&
          __room.price <= paramObj.price &&
          __room.people >= paramObj.people &&
          includesMatch(__room.includes, paramObj.includes) === true
        );
      else {
        return (
          __room.premium === paramObj.premium &&
          __room.price <= paramObj.price &&
          __room.people >= paramObj.people
        );
      }
    });
    dispatch({ type: LOAD_FILTER, payload: paramObj });
    dispatch({ type: FILTER_ROOMS, payload: filteredObjs });
  };
  //set filter group
  const setFilter = () => {
    dispatch({ type: SET_FILTER_ROOMS });
  };
  //unset filtergroup
  const unsetFilter = () => {
    dispatch({ type: UNSET_FILTER_ROOMS });
  };
  //
  return (
    <RoomsContext.Provider
      value={{
        rooms: state.rooms,
        FrontPageRooms: state.LoadedRooms,
        loadFrontImages,
        areRoomsLoaded: state.areRoomsLoaded,
        areRoomsFiltred: state.areRoomsFiltred,
        filteredRooms: state.filteredRooms,
        setFilter,
        unsetFilter,
        filterRooms,
        filter: state.filter
      }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};

export default RoomsState;
