//file create using user input,
let fs=require('fs/promises');
let path=require("path");
let readline=require("readline");

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
}
)

let result=async ()=>{
console.log("\n choosie");
console.log("1.File create");
console.log("2.Read File Context");
console.log("3.Add context");
console.log("4.delete the file");
console.log("5.Exit");


 
rl.question("Enter your chooise: ",(num)=>{
  switch(num){ 
    case "1":
      rl.question("Enter The file Name: ",(user_File_InputName)=>{
        // let user_File_InputName="joker";
        let filename=`${user_File_InputName}.txt`
    let pathname=path.join(__dirname,filename);
        rl.question("Enter The file context: ",async (user_File_Comment)=>{
      try{
        let res=await fs.writeFile(pathname,`${user_File_Comment}`,"utf-8");
        console.log("File create sucessfully: "+res);
      }
      catch{
        (err)=>{console.error(err)
        }
      }
      result();
        })
    // let user_File_Comment="lkb";
      })
    break;
    case "2":
      rl.question("Enter The file you want to read: ",async(user_File_InputName)=>{   
          try{
            let filename=`${user_File_InputName}.txt`
            let pathname=path.join(__dirname,filename);
            let res=await fs.readFile(pathname,"utf-8",(data)=>{
              console.log("Flie data is"+data);
            });
            console.log(res);
          }
          catch{
            (err)=>{console.error(err)
            }
          }
          result();
          })
        break;    
    case "3":
          rl.question("Enter The file Name: ",(user_File_InputName)=>{
            // let user_File_InputName="joker";
            let filename=`${user_File_InputName}.txt`
        let pathname=path.join(__dirname,filename);
            rl.question("Enter The file context: ",async (user_File_Comment)=>{
          try{
            let res=await fs.appendFile(pathname,`\n ${user_File_Comment}`,"utf-8");
            console.log("File updated sucessfully: "+res);
          }
          catch{
            (err)=>{console.error(err)
            }
          }
          result();
            })
        // let user_File_Comment="lkb";
          })
        break;
    case "4":
          rl.question("Enter The file Name: ",async (user_File_InputName)=>{
            let filename=`${user_File_InputName}.txt`
        let pathname=path.join(__dirname,filename);    
          try{
            let res=await fs.unlink(pathname);
            console.log("File deleted sucessfully: "+res);
          }
          catch{
            (err)=>{console.error(err)
            }
          }
          result();
        // let user_File_Comment="lkb";
          })
        break;
             
    case "5":
          console.log("Good byy");
          rl.close();  
    default:
      console.log("Invalid choose.");
      result();
  }
}) 
}

result();