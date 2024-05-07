let input = [{id: 1, number: 1}, {id: 1, number: 2}, {id: 2, number: 1}];

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
