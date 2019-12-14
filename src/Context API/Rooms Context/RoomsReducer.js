import {
  LOAD_FRONT_IMAGES,
  SET_FILTER_ROOMS,
  UNSET_FILTER_ROOMS,
  FILTER_ROOMS,
  LOAD_FILTER
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_FRONT_IMAGES:
      return {
        ...state,
        LoadedRooms: action.payload,
        areRoomsLoaded: true
      };
    case SET_FILTER_ROOMS:
      return {
        ...state,
        areRoomsFiltred: true
      };
    case UNSET_FILTER_ROOMS:
      return {
        ...state,
        areRoomsFiltred: false
      };
    case FILTER_ROOMS:
      return {
        ...state,
        filteredRooms: action.payload
      };
    case LOAD_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
