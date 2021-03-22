export default function mapAPI() {
  const itemObj = { name: "omena" };
  const itemMap = new Map([["name", "omena"]]);

  console.log(itemObj);
  console.log(itemMap);

  itemObj.birthDay = "02/02/1988"; // ?
  itemMap.set("birthDay", "02/02/1988"); //?

  // check if has a prop
  itemObj.hasOwnProperty("birthDay"); //?
  itemMap.has("birthDay"); //?
}

mapAPI();
