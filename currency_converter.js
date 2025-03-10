let readline=require("readline");
let api="https://api.frankfurter.app/latest";

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})

function value(){

  rl.question("Enter the amount in usd: ",(UserInputUsd)=>{
    rl.question("Enter the Target currency: ",(targetCurrency)=>{
      let FinalTargetCurrency=targetCurrency.toUpperCase();

      fetch(api).then(res=>res.json()).then((data)=>{
          if(isNaN(UserInputUsd) || UserInputUsd<0){
            console.log(`Enter a vaild +ve value`)
          }
      
      if(data.rates[FinalTargetCurrency]){
        let finalrate=data.rates[FinalTargetCurrency]
        let result=finalrate*Number(UserInputUsd);
        console.log(`${UserInputUsd} USD is approximately ${result} ${targetCurrency}`); 
        value();
      }
      else{
        console.log(`${FinalTargetCurrency} is not avaliable`);
        rl.close();
      }
      }).catch((err)=>{console.error(err);
        rl.close();
      })
    })
  })


}
value()