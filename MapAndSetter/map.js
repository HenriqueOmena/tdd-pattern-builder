export default function mapAPI() {
  const itemObj = { name: "omena" };
  const itemMap = new Map([["name", "henrique omena"]]);

  console.log(itemObj);
  console.log(itemMap);

  itemObj.birthDay = "02/02/1988"; // ?
  itemMap.set("birthDay", "02/02/1988"); //?

  // check if has a prop
  itemObj.hasOwnProperty("birthDay"); //?
  itemMap.has("birthDay"); //?

  delete itemObj.birthDay; //?
  itemMap.delete("birthDay"); //?

  Object.keys(itemObj).length; //?
  itemMap.size; //?

  //get all values
  Object.entries(itemObj); // ?
  [...itemMap]; //?

  for (const [key, value] of Object.entries(itemObj)) {
    key;
    value;
  }

  for (const [key, value] of itemMap) {
    key;
    value;
  }

  [...itemMap.keys()]; //?

  // clean all object
  Object.keys(itemObj).map((key) => delete itemObj[key]); //?
  itemMap.clear();
}

mapAPI();
