function RandomInt(min,max) {
    //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sleep(ms) {
    //https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function start(){
    document.getElementById("start").innerHTML = "<p>Generating Code...</p>"
    document.getElementById("start").innerHTML = game_document
    time()
}
var code = RandomInt(1000,9999)
async function time(){
    var countdown = 180
    while(0 == 0){
        if(countdown == 0){
            game_over()
            break
        }
        document.getElementById("time").innerHTML = countdown
        await sleep(1000)
        countdown = countdown - 1
    }
}
async function game_won(){
    document.getElementById("start").innerHTML = "<h1 class='gameover'>Well done you cracked the code!</h1><button class='retry_button' onclick='retry()'>Go back to home</button>"
}
async function check_code(){
    if(document.getElementById("code").value <= code){
        document.getElementById("highlow").innerHTML = "Too low"
    }
    if(document.getElementById("code").value >= code){
        document.getElementById("highlow").innerHTML = "Too High"
    }
    if(document.getElementById("code").value == code){
        game_won()
    }
}
async function game_over(){
    document.getElementById("start").innerHTML = "<h1 class='gameover'>Game Over!</h1><p id='correct_code'></p><button class='retry_button' onclick='retry()'>Try again</button>"
    document.getElementById("correct_code").innerHTML = "The correct code was: "+code
}

async function retry(){
    window.location.pathname ="redirect.html"
}
var game_document = `
<p id="time" class="time">Time Left: 00:00</p>
<input type="number" id="code" placeholder="Code" min="0" max="9999">
<button onclick="check_code()">Submit</button>
<p id="highlow"></p>`