function countdown(num){
    let stop = setInterval(function(){
        num --;
        if(num <= 0){
            clearInterval(stop);
            console.log('Done');
        } else {
            console.log(num);
        }
    },1000)
};

function countup(num){
    let stop = setInterval(function(){
        num ++;
        if(num >= 11){
            clearInterval(stop);
            console.log('Done')
        } else {
            console.log(num);
        }
    },1000)
}

function randomGame(){
    let counter = 0
    let stop = setInterval(function(){
        let rand = Math.random();
        counter++
        if(rand > .75) {
            clearInterval(stop);
            console.log(`It took ${counter} roll(s) to get above .75`);
        } else {
            console.log(rand);
        }
    },1000)
}

console.log(`The available options are: \n countdown(number) \n countup(number) ~ it only goes up to 10. \n randomGame() ~ Try and guess how many rolls it'll take!`);