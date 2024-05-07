// function minPlatforms(arrival, departure) {
//     // Sort the arrays in ascending order
//     arrival.sort((a, b) => a - b);
//     departure.sort((a, b) => a - b);

//     let platforms = 1;
//     let maxPlatforms = 1;

//     let arrivalIndex = 1;
//     let departureIndex = 0;

//     while (arrivalIndex < arrival.length && departureIndex < departure.length) {
//         if (arrival[arrivalIndex] <= departure[departureIndex]) {
//             platforms++;
//             arrivalIndex++;
//         } else {
//             platforms--;
//             departureIndex++;
//         }
//         maxPlatforms = Math.max(maxPlatforms, platforms);
//     }

//     return maxPlatforms;
// }

// // Example usage:
// const arrivalTimes = [9 * 60, 9 * 60 + 40, 9 * 60 + 50, 11 * 60, 15 * 60, 18 * 60];
// const departureTimes = [9 * 60 + 10, 12 * 60, 11 * 60 + 20, 11 * 60 + 30, 19 * 60, 20 * 60];

// console.log(minPlatforms(arrivalTimes, departureTimes)); // Output: 3

function minPlatforms(arrival, departure) {
    arrival = arrival.sort((a, b) => a - b);
    departure = departure.sort((a, b) => a - b);

    let platforms = 1;
    let maxPlatforms = 1;

    let i = 1;
    let j = 0;

    while (i < arrival.length && j < departure.length) {
        if (arrival[i] <= departure[j]) {  // Changed < to <=
            platforms++;
            i++;
        } else {
            platforms--;
            j++;
        }
        maxPlatforms = Math.max(maxPlatforms, platforms);
    }
    return maxPlatforms;
}

let arrival = [900, 940, 950, 1100, 1500, 1800];  // Removed leading zeros
let departure = [910, 1200, 1120, 1130, 1900, 2000];  // Removed leading zeros
console.log(minPlatforms(arrival, departure));  // Output: 3
