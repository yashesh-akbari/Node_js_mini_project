// import { log } from "console";
let readline =  require("readline");

const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks=[];

let displayTasks=()=>{
  if(tasks.length===0){
    console.log("No tasks");
  }
  else{
    console.log("\n Todo list");
    tasks.forEach((task,index) => {
      console.log(`${index+1}.${task}`);
    });
  }
}

const showMenu=()=>{
  console.log("\nTo-Do List App:");
  console.log("1. Add a Task");
  console.log("2. View Tasks");
  console.log("3. Exit");

  rl.question("Choose an option:",(answer)=>{
    switch(answer){
      case '1':
        rl.question("Enetr the Task:",(task)=>{
          tasks.push(task);
    console.log(`Task "${task}" added.`);
          showMenu();
        })
      break;
      case '2':
        displayTasks();
        showMenu();
      break;
      case '3':
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invaild option.try again.");
        showMenu();
    }
  }
  )
}

showMenu();