import sideMenu from "./template/menu.js";
import {SelectionSort, InsertionSort, ShellSort} from "./scripts/Sort.js"

//Functions loaded when page loads

sideMenu()
let displayArray = createRandomArray(10);

//Selecionando div dos gráficos
const graph = document.querySelector('#graph')

//Passando por cada um dos elementos do array gerado e gerando seus html
displayArray.forEach((number, index) => {
    //Criando elementos HTML barra e número que serão exibidos na página
    const bar = document.createElement('div')
    const value = document.createElement('p')

    //Setando classes CSS e ID's para posterior manipulação dos elementos
    bar.classList.add('bar')
    bar.id = `bar-${index}`
    value.classList.add('bar-value')
    value.id = `value-${index}`

    bar.style.height = `${number * 10}px` //Setando altura do elemento de acordo com o número
    value.innerText = number //Setando número que será exibido acima da barra


    //Criando div pai dos elementos e adicionando elementos dentro dela
    const barContainer = document.createElement('div')
    barContainer.classList.add('bar-container')
    barContainer.appendChild(value)
    barContainer.appendChild(bar)

    graph.appendChild(barContainer) //Adicionando elementos dentro da div dos gráficos
})

const sort = new SelectionSort(displayArray.length)

sort.sort(displayArray)


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

export function manipulateElements(i, j){
    //Seleciona barras e valores
    const firstBar = document.querySelector(`#bar-${i}`)
    const secondBar = document.querySelector(`#bar-${j}`)

    const firstValue = document.querySelector(`#value-${i}`)
    const secondValue = document.querySelector(`#value-${j}`)
    
    //Altera o valor de ambos as barras para se destacar
    firstBar.style.backgroundColor = 'red'
    secondBar.style.backgroundColor = 'blue'

    setTimeout(() => {
        //Após 1,5 segundos, o valor de ambos os elementos são coletados
        const value1 = parseInt(firstValue.innerHTML)
        const value2 = parseInt(secondValue.innerHTML)

        //Ordem dos valores é invertida
        firstValue.innerHTML = value2
        secondValue.innerHTML = value1

        //Altura das barras é invertida
        firstBar.style.height = `${value2 * 10}px`
        secondBar.style.height = `${value1 * 10}px`

        //Cores são setadas de volta ao normal
        firstBar.style.backgroundColor = '#333'
        secondBar.style.backgroundColor = '#333'
    }, 1500)
}

