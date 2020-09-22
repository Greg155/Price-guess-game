console.log("Welcome to the RIGHT PRICE GAME !");

console.log("Guess the price between 0 and 100");
let numberRandom = Math.random() * (100-0) + 0;
numberRandom = Math.round(numberRandom);
console.log(numberRandom);
let userNumber = -1;


do{
    userNumber = prompt("Take a guess !");
    if(userNumber == numberRandom){
        console.log("CONGRATULATION");
    }else if(userNumber < numberRandom){
        console.log("Higher !");
    }else{
        console.log("Lower");
    }

}while(userNumber!=numberRandom);

console.log("See you soon ! ")
