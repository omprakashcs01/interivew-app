let input = [{id: 1, number: 1}, {id: 1, number: 2}, {id: 2, number: 1}];
//// input = [{id: 1, number: 1}, {id: 1, number: 2}, {id: 2, number: 1}]
// Output = [{id: 1, number: [1, 2]}, {id: 2, number: [1]}]


let output = input.reduce((acc, next) => {
    let existingObj = acc.find(item => item.id === next.id);
    if (existingObj) {
        existingObj.number.push(next.number);
    } else {
        acc.push({ id: next.id, number: [next.number] });
    }
    return acc;
}, []);

console.log(output);

//Leet code 

Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};

// Example usage:
const array1 = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
];
const fn1 = function (item) { 
    return item.id; 
};
console.log(array1.groupBy(fn1));
// Output: { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }


