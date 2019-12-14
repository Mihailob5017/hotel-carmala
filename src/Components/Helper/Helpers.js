export const CheckRoute = route => {
  if (route.indexOf("search") > -1) return false;
  else return true;
};
export const filterOutOptions = object => {
  let array = [];
  const { Wifi, TV, Lunch, Breakfast, Pets, Hot_Tub } = object;
  if (Wifi) array.push("Wifi");
  if (TV) array.push("TV");
  if (Lunch) array.push("Lunch");
  if (Breakfast) array.push("Breakfast");
  if (Pets) array.push("Pets");
  if (Hot_Tub) array.push("Hot Tub");

  return array;
};
export const includesMatch = (roomArray, paramArray) => {
  const checker = paramArray.every(elem => roomArray.includes(elem));
  if (checker) return true;
  else return false;
};
export const arrayToObj = array => {
  console.log(array);
  const obj = {
    Wifi: array.includes("Wifi") ? true : false,
    Breakfast: array.includes("Breakfast") ? true : false,
    Lunch: array.includes("Lunch") ? true : false,
    TV: array.includes("TV") ? true : false,
    Hot_Tub: array.includes("Hot Tub") ? true : false,
    Pets: array.includes("Pets") ? true : false
  };

  return obj;
};
