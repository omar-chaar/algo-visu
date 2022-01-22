import sideMenu from "./template/menu.js";
import {SelectionSort, InsertionSort, ShellSort} from "./scripts/Sort.js"

//Functions loaded when page loads

sideMenu()
let displayArray = createRandomArray(10);
//Functions

function createRandomArray(size){
    let returnArray = new Array(size);
    for(let i = 0; i < returnArray.length; i++){
        let randomNumber = parseInt(1 + Math.random() * 30);
        while(returnArray.includes(randomNumber)){
            randomNumber = parseInt(1 + Math.random() * 30);
        }
        returnArray[i] = randomNumber;       
    }
    return returnArray;
}                                       

