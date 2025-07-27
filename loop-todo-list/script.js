const tasks = [] //todos list here

while (true) {
    let task = prompt("Enter a task: or type 'done' to finish");
    if (task.toLowerCase() === 'done') {
        break;
    }
    tasks.push(task);
    console.log(`Task added: ${task}`);
}

console.log("Your tasks are:");
for(let i =0; i < tasks.length; i++) {
    console.log(`${i+1}. ${tasks[i]}`); // Displaying tasks with index
}