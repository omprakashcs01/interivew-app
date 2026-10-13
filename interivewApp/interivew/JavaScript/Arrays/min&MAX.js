function findMinMax(array) {
    if (array.length === 0) {
        return { min: undefined, max: undefined };
    }

    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return { min, max };
}

let array = [5, 3, 9, 2, 7, 1];
let result = findMinMax(array);
console.log("Minimum element:", result.min);
console.log("Maximum element:", result.max);
