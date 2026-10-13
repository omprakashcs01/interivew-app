const getValueByPath = (obj, path) => {
  let keys = path.split(".");

  for (let key of keys) {
    if (obj == null) {
      return undefined;
    }

    obj = obj[key];
  }

  return obj;
};

const data = {
  user: {
    name: "John",
    address: {
      city: "Delhi"
    }
  }
};

console.log(getValueByPath(data, "user.address.city")); // Delhi
console.log(getValueByPath(data, "user.name")); // John
console.log(getValueByPath(data, "user.age")); // undefined

//short
const getValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => {
    return acc?.[key];
  }, obj);
};