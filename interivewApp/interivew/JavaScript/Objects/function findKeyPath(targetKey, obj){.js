function findKeyPath(targetKey, obj, path = "") {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = obj[key];

        if (key === targetKey) {
            return `${path}${key}`;
        }

        if (typeof value === "object" && value !== null) {
            const result = findKeyPath(targetKey, value, `${path}${key}.`);

            if (result) {
                return result;
            }
        }
    }

    return "";
}

const obj = {
    a: {
        b: "test",
        c: [],
        d: {
            e: "test",
            f: {
                "target1": "found me"
            }
        }
    },
    b1: [
        {
            c1: {
                "target2": "found me again"
            },
            d1: "test"
        }
    ]
};

console.log(findKeyPath("target1", obj));

  console.log(findKeyPath("target1", obj));
  console.log(findKeyPath("target15", obj));
  