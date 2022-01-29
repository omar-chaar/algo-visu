import sideMenu from "./template/menu.js";
import { SelectionSort, InsertionSort, ShellSort, MergeSort } from "./scripts/Sort.js"

let eventCallback //Essa variável salva a função que dispara o evento para que ela possa ser removida através do método removeEventListener ()

//Objeto com funções que invocam os algortimos, listados por numeros
const sortingFunctions = {
    0: function selectionSort(array) {
        const sort = new SelectionSort()
        sort.sort(array)
    },
    1: function insertionSort(array) {
        const sort = new InsertionSort()
        sort.sort(array)
    },
    2: function shellSort(array) {
        const sort = new ShellSort()
        sort.sort(array)
    },
    3: function mergeSort(array) {
        const sort = new MergeSort()
        sort.sort(array)
    }
}

//Functions loaded when page loads

sideMenu()

//Toda vez que o usuário selecionar outro algoritmo essa função será invocada com um valor que corresponde ao algortimo
function changePage(page) { //"page" é o valor correspondente ao algoritimo, de 0 à 3, ele será usado para selecionar as funções acima
    let title
    setOpacity(page)
    toggleButtons(false)
    emptyGraph() //Esvazia o gráfico para um novo array ser insertido
    switch (page) {
        case 0:
            title = 'Selection Sorting'
            break
        case 1:
            title = 'Insertion Sorting'
            break
        case 2:
            title = 'Shell Sorting'
            break
        case 3:
            title = 'Merge Sorting'
            break
    } //Switch seleciona o título do algortimo

    document.querySelector('#title').innerText = title //Insere o título
    const array = createArrays() //Insere um novo array na tela e retorna os valores desse array
    createPlayEvent(page, array) //Essa função cria um evento no botão, para quando clicar ele disparar o algortimo
    createNewSortEvent(page) //Essa função cria um evento no botão para criar uma nova sequência aleatória de algortimo
}

function createArrays() {
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

    const newGraph = document.querySelector('#newGraph')
    if (newGraph) {
        newGraph.classList.add('graph')
        displayArray.forEach((unused, index) => {
            const bar = document.createElement('div')
            const value = document.createElement('p')

            bar.classList.add('bar')
            bar.id = `newBar-${index}`
            value.classList.add('bar-value')
            value.id = `newValue-${index}`

            const newBarContainer = document.createElement('div')
            newBarContainer.classList.add('bar-container')
            newBarContainer.appendChild(value)
            newBarContainer.appendChild(bar)

            newGraph.appendChild(newBarContainer)
        })
    }

    return displayArray
}

function emptyGraph() {
    document.querySelector('#graph').innerHTML = '' //Esvazia o HTML do gráfico
}

function createPlayEvent(page, array) {
    const play = document.querySelector('#play') //Seleciona botão play
    play.removeEventListener('click', eventCallback) //Caso haja um evento anterior, ele remove esse evento para criar um novo evento com o novo array
    eventCallback = () => { //Atribui a função callback a variável eventCallBack
        toggleButtons(true) //Desabilita os botões
        const myPromise = new Promise((resolve, reject) => {
            sortingFunctions[page](array) //Selecionamos a função através do index que corresponde a ela (page) e passamos o array como parametro
            setTimeout(() => {
                resolve()
            }, 15000)
        }) //Aqui foi usado uma promise para esperar 15s até que o array seja reorganizado

        myPromise.then(() => {
            toggleButtons(false, true) //Quando a promise retorna resolvida, significa que se passaram 15 minutos e os botões são re-ativados
        })
    }
    play.addEventListener('click', eventCallback) //Adiciona a função callback ao evento de click no botão
}

function createNewSortEvent(page) {
    const newSort = document.querySelector('#new-sort') //Seleciona o botão de novo sort
    newSort.addEventListener('click', () => { //Cria um evento no botão de new sort
        toggleButtons(false)
        emptyGraph() //Esvazia o gráfico para receber o novo array
        const array = createArrays() //Cria um novo array na tela e recebe seus valores
        createPlayEvent(page, array) //Cria um novo evento de play que corresponde ao novo array
    })
}

function toggleButtons(state, disablePlay = false) {
    const play = document.querySelector('#play')
    const newSort = document.querySelector('#new-sort')

    if (!disablePlay) play.disabled = state //Habilita o play apenas quando o algoritmo estiver não ordenado
    newSort.disabled = state
    //Habilita / desabilita os botões de acordo com o parâmetro
}

//Functions

function createRandomArray(size) {
    let returnArray = new Array(size);
    for (let i = 0; i < returnArray.length; i++) {
        let randomNumber = parseInt(1 + Math.random() * 30);
        while (returnArray.includes(randomNumber)) {
            randomNumber = parseInt(1 + Math.random() * 30);
        }
        returnArray[i] = randomNumber;
    }
    return returnArray;
}

export function manipulateElements(i, j) {
    //Seleciona barras e valores
    const firstBar = document.querySelector(`#bar-${i}`)
    const secondBar = document.querySelector(`#bar-${j}`)

    const firstValue = document.querySelector(`#value-${i}`)
    const secondValue = document.querySelector(`#value-${j}`)

    //Altera o valor de ambos as barras para se destacar
    firstBar.style.backgroundColor = 'red'
    secondBar.style.backgroundColor = 'blue'

    setTimeout(() => {
        //Após 1 segundo, o valor de ambos os elementos são coletados
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
    }, 1000)
}

//Working only synchronous
export function manipulateMerge(i, j, toAuxiliar) {
	const firstBar = document.querySelector(`#bar-${i}`);
	const secondBar = document.querySelector(`#newBar-${j}`);
	const firstValue = document.querySelector(`#value-${i}`);
	const secondValue = document.querySelector(`#newValue-${j}`);
	if (toAuxiliar) {
		firstBar.style.backgroundColor = "red";

		firstBar.style.visibility = "hidden";
		firstValue.style.visibility = "hidden";
		firstBar.style.backgroundColor = "#333";
		secondBar.style.height = `${parseInt(firstBar.style.height)}px`;
		secondValue.innerHTML = firstValue.innerHTML;
	} else {
		secondBar.style.backgroundColor = "red";

		secondBar.style.visibility = "hidden";
		secondValue.style.visibility = "hidden";
		secondBar.style.backgroundColor = "#333";
		firstBar.style.height = `${parseInt(secondBar.style.height)}px`;
		firstValue.innerHTML = secondValue.innerHTML;
		firstBar.style.visibility = "visible";
		firstValue.style.visibility = "visible";
	}
}
//

function setOpacity(val) {
    for (let i = 0; i <= 3; i++) {
        document.querySelector(`#link-${i + 1}`).style.opacity = val === i ? 0.5 : 1
        document.querySelector(`#mob-link-${i + 1}`).style.opacity = val === i ? 0.5 : 1
    }
} //Seta opacidade da navbar no item escolhido

//Essa função auto-invocada será executada quando a página iniciar
(function () {
    const sort = new URLSearchParams(window.location.search).get('sort')
    switch (sort) {
        case 'selection':
            changePage(0)
            break
        case 'insertion':
            changePage(1)
            break
        case 'shell':
            changePage(2)
            break
        case 'merge':
            document.querySelector('#title').style.transform = 'translateY(-100%)'
            document.querySelector('.button-container').style.transform = 'translateY(-700%)'
            const graph = document.querySelector('#graph')
            graph.style.transform = 'scale(0.5) translateY(-75%)'
            const newGraph = graph.cloneNode()
            newGraph.style.transform = 'scale(0.5) translateY(-150%)'
            newGraph.id = 'newGraph'
            graph.after(newGraph)
            changePage(3)
            break
        default:
            changePage(0)
    }
})()