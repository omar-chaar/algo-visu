import sideMenu from "./template/menu.js";

sideMenu()


//Functions


function createRandomArray(size){
    returnArray = new Array(size);
    for(i in returnArray){
        randomNumber = parseInt(Math.random() * 100);
        while(returnArray.includes(randomNumber)){
            randomNumber = parseInt(Math.random() * 100);
        }
        returnArray[i] = randomNumber;
    }
    return returnArray;
}