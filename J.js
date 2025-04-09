let Score =0;
let Rn = Math.floor(Math.random()*10)+1;
console.log( Rn);
document.getElementById("up-num").innerText=Rn;
function genratenum(){
    Rn = Math.floor(Math.random()*10)+1;
    console.log( Rn);
    document.getElementById("up-num").innerText=Rn;
}
function getNumbers(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    a=Number(a);
    b=Number(b);
    console.log(a);
    console.log(b);
    let Result = a+b;
    if (Result == Rn){
        Score++;
        console.log("1+");
        genratenum();        
    }else{
        score--;
        console.log("10-");
    }
    document.getElementById("Score").innerText=Score;
    document.getElementById("output").innerText=Result;
}
let count = 15;
let countdown = setInterval(() => {
    // ✅ Update the <span> with the current count
    document.getElementById("Timer").innerText = `⏳ ${count}`;   
    count--;
    if (count < 0) {
        clearInterval(countdown);
        document.getElementById("Timer").innerText = "⏰ Time is up!";
        console.log("Time is up");
        document.getElementById("num1").disabled= true;
        document.getElementById("num2").disabled = true;

        alert("Game is end and your scrore is"+Score);
        }
}, 1000);



