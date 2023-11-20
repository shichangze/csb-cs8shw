function sleep(ms) {
    //https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
    return new Promise(resolve => setTimeout(resolve, ms));
}
function generateRandomLetter() {
    //https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
function RandomInt(min, max) {
    //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function change_title(){
    document.getElementById("title").innerHTML = generateRandomLetter()+generateRandomLetter()+generateRandomLetter()+generateRandomLetter()+generateRandomLetter()+generateRandomLetter()+generateRandomLetter() 
}
async function reset_title(){
    document.getElementById("title").innerHTML = "Code Crack"
}

async function animate(){
    while(0 == 0){
        await sleep(1000)
        if (RandomInt(1,5) == 1){
            for (let i = 0; i < 10; i++) { //https://www.w3schools.com/js/js_loop_for.asp
                change_title()
                await sleep(RandomInt(50,70))
            }
            reset_title()
        }
    }
}

animate()