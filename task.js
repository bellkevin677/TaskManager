

let main = true;

let answer;

while (main) {

    answer = prompt(`TASK MANAGER

What would you like to do (Please enter one of the options below): 

"TASKS" - Display all Tasks
"NEW" - Add A New Taks
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`
    )

    if (answer == `CLOSE`) {
        alert(`Thank you for using the Task Manager`)
        break;
    } else if (answer == 'TASKS') {
        alert(`Charge Macbook 
Master Javascript
${newtask}`)
    } else if (answer == `NEW`) {
        newtask = prompt(`Please enter the new task:`)
    }
}

