// Student Sorted Array
// You are working on a project for a local school. The school has a list of students and their grades, stored in a 2D array. Your task is to create a function that takes in a 2D array of students and returns an array of the students' names sorted in alphabetical order.

// Input Format
// A 2D array of strings, arr, where each subarray represents a student and has the following format:

// [name, grade]

// Output Format
// An array of strings containing the names of the students in arr, sorted in alphabetical order.

// Example 1
// // Input: [   
//     ["Student B", "A"],
//     ["Student C", "B"],
//     ["Student A", "C"],
//     ["Student D", "D"]
// ]
//Output:["Student A", "Student B", "Student C", "Student D"]

function sortStudents(arr) {
    // Extract the names from the 2D array
    let names = arr.map(student => student[0]);
    
    // Sort the names in alphabetical order
    names.sort();
    
    return names;
}

// Example usage:
const students = [
    ["Student B", "A"],
    ["Student C", "B"],
    ["Student A", "C"],
    ["Student D", "D"]
];

console.log(sortStudents(students));
// Output: ["Student A", "Student B", "Student C", "Student D"]

