let userscore=0;
let compscore=0;

let choises=document.querySelectorAll(".first")
let msg=document.querySelector(".msg");
let userscorenum=document.querySelector("#userscore");
let compscorenum=document.querySelector("#compscore");

choises.forEach((first) => {
first.addEventListener("click",()=>{
  const userchoises=first.getAttribute("id");
  playgame(userchoises);
})
})
let gencompchoise=()=>{
    const options=["rock","paper","scissors"];
  const value=Math.floor(Math.random()*3); 
  return options[value];
  }
  let draw =()=>{
   msg.innerText="Match draw";
   msg.style.backgroundColor="black";
  }

let playgame=(userchoises)=>{
    console.log("user choises=",userchoises);
    const compchoise=gencompchoise();
    console.log("compchoise is =",compchoise);

    if(userchoises===compchoise){
         draw();
    }else{
     let userwin=true;
     if(userchoises==="rock"){
        userwin=compchoise==="scissors"?true:false;
      }else if(userchoises==="paper"){
         userwin=compchoise==="rock"?true:false;
      }else{
         userwin=compchoise==="paper"?true:false
      }
      showwinner(userwin,userchoises,compchoise);

    }
}
let showwinner=(userwin,userchoises,compchoise)=>{
   if(userwin){
      userscore++;
      msg.innerText=`You won!!!! ${userchoises} beats ${compchoise}`;
      msg.style.backgroundColor="green";
      userscorenum.innerText=userscore;
   }else{
      compscore++;
    msg.innerText=`Try again!!! you lose ${compchoise} beats ${userchoises}`;
    msg.style.backgroundColor="red";
    compscorenum.innerText=compscore;
   }
};
