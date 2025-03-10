let readline=require("readline")

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})

function repret(){
 console.log("\n choosie:");
 console.log("1.Add");
 console.log("2.Sub");
 console.log("3.mul");
 console.log("4.div");
 console.log("5.exit");

 rl.question("Enter your choosic: ",(num)=>{
    switch(num){
      case "1":
        rl.question("Enter number 1: ",(num1)=>{
          let Num1=Number(num1);
          rl.question("Enter number 2: ",(num2)=>{
            let Num2=Number(num2);
            sum=Num2+Num1;
            console.log("The sum is: "+sum);
            repret();
          });
        });
      break;
      case "2":
        rl.question("Enter number 1: ",(num1)=>{
          rl.question("Enter number 2: ",(num2)=>{
            sub=num1-num2;
            console.log("The sub is: "+sub);
            repret();
          });
        });
      break;
      case "3":
        rl.question("Enter number 1: ",(num1)=>{
          rl.question("Enter number 2: ",(num2)=>{
            mul=num1*num2;
            console.log("The mul is: "+mul);
            repret();
          });
        });
      break;
      case "4":
        rl.question("Enter number 1: ",(num1)=>{
          rl.question("Enter number 2: ",(num2)=>{
            div=num1/num2;
            console.log("The div is: "+div);
            repret();
          });
        });
      break;
      case "5":
       console.log("Good byy.");
       rl.close();
      break;
      default:
        console.log("You enter invalid choosic try again.");
        repret();
    }
 })
}

repret();