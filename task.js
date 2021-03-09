

// let main = true;

// let answer;

// while (main) {

//     answer = prompt(`TASK MANAGER

// What would you like to do (Please enter one of the options below): 

// "TASKS" - Display all Tasks
// "NEW" - Add A New Taks
// "REMOVE" - Remove A Task
// "CLOSE" - Close The Task Manager
// // `
//     )

//     if (answer == `CLOSE`) {
//         alert(`Thank you for using the Task Manager`)
//         break;
//     } else if (answer == 'TASKS') {
//         alert(`Charge Macbook 
// Master Javascript
// ${newtask}`)
//     } else if (answer == `NEW`) {
//         newtask = prompt(`Please enter the new task:`)
//     }
// }

// Everything below was done in class following Matt

const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below): 

"TASKS" - Display all Tasks
"NEW" - Add A New Taks
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
    `Charge Macbook`,
    `Master Javascript`
];

// For displaying tasks for the user
let showTasks = "";

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for hte user to select an option. Also, sets the user's response to a variable. Also, converts to UPPERCASE
let userInput = prompt(menu).toUpperCase();

// Loops and continues to display menu until the user ends the program (AKA until the user enters CLOSE. (Uppercase or lowercase))
while (userInput !== "CLOSE") {
    // Checks if user entered "TASKS" (Uppercase or lowercase)
    if (userInput === "TASKS") {
        // Concatenates each task (AKA item) in the tasks array to the showTasks string variable
        for (task of tasks) {
            // Using \n to create a new line (AKA Line Break) after each task
            showTasks += `${task}\n`;
        }
        // Displays the current tasks to the user
        alert(showTasks);
        // Sets the value of the showTasks string variable back to an empty string
        showTasks = "";
        // Checks if user entered "NEW" (Uppercase or lowercase)
    } else if (userInput === "NEW") {
        // Prompts the user to enter a new task and stores their response
        newTask = prompt(`Please enter the new task:`)
        // Loop that continues looping until user enters something
        while (true) {
            // Checks if the user entered nothing
            if (newTask === "") {
                // Promts user again to enter new task
                newTask = prompt(`Please enter the new task:`);
            } else {
                // Breaks out of loop since user entered soemthing
                break;
            }
        }
        // Alerts the user their new task has been added
        alert(`"${newTask}" has been added!`)
        // Adds teh user's entry as a new item at the end of the tasks array
        tasks.push(newTask);
        // Checks if the user entered "REMOVE" (Uppercase or lowercase)
    } else if (userInput === "REMOVE") {
        // Loop that continues looping until user enters a valid number
        while (true){
            // Concatenates each task/item in the tasks array to the showTasks string variable. Also, sets a number for each task
            for (i = 0; i < tasks.length; i++) {
                // Using \n to creat a new line. Also, adding 1 to i (AKA the index) so the numbers will start displaying at 1
                showTasks += `${i + 1}: ${tasks[i]}\n`;
            }
            // Prompts the user to enter a number and stores their response. Also, using \n to create a new line. Finally, subtracting 1 from user's input so it matches the index in the tasks array. (NOTE: JavaScript will attempt to convert a string into a number when you try to subtract from it. Just like ParseInt. So ParseInt is not actually needed here.)
            num = parseInt(prompt(`Please enter a number you would like to remove:\n${showTasks}`)) - 1;
            // Verifies the user entered a number within the index/number range
            if (num >= 0 && num < tasks.length){
            // Removes the selected task/item and sets that task/value in the removed variable
            removed = tasks.splice(num, 1);
            // Alerts user with the task/item that has been removed (NOTE: Using index on the "removed" variable because splice returns what is removed in an array)
            alert(`"${removed[0]}" has been removed!`)
            // Sets value of showTasks variable back to an empty string
            showTasks = "";
            // Breaks out of loop since the user entered a valid index/number
            break;
            } else {
                // Alerts the user that they have not entered a valid number
                alert(`Not a valid entry`);
                // Sets value of showTasks variable back to an empty string
                showTasks = "";
            }
        }
    }
    // Displays menu again. Also, converting to value to UPPERCASE.
    userInput = prompt(menu).toUpperCase();
}
// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager!`);