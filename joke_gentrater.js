//randome joke_genrater using api fetch

let api="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

let answer=()=>fetch(api).then(res=>  {return res.json()}).then((data)=>{
  console.log("Here is a random Joke: \n"+data.setup||data.joke 
    +""+data.delivery);
  }).catch((err)=>{console.error(err);
})

answer();
