import sortingFunctions from "./sortingFunctions.js"
import {createArrays} from './arrays.js'

let eventCallback

export function createPlayEvent(page, array) {
    const play = document.querySelector('#play') //Seleciona botão play
    play.removeEventListener('click', eventCallback) //Caso haja um evento anterior, ele remove esse evento para criar um novo evento com o novo array
    eventCallback = () => { //Atribui a função callback a variável eventCallBack
        toggleButtons(true) //Desabilita os botões
        localStorage.setItem('stop', false)
        if (page < 2) {
            const timePromise = new Promise((resolve) => {
                sortingFunctions[page](array) //Selecionamos a função através do index que corresponde a ela (page) e passamos o array como parametro
                setTimeout(() => {
                    resolve()
                }, 15000)
            }) //Aqui foi usado uma promise para esperar 15s até que o array seja reorganizado
            timePromise.then(() => {
                toggleButtons(false, true) //Quando a promise retorna resolvida, significa que se passaram 15 minutos e os botões são re-ativados
            })
        }
        else {
            const asyncPromise = new Promise(async (resolve) => {
                await sortingFunctions[page](array)
                resolve()
            })
            asyncPromise.then(() => {
                toggleButtons(false, true)
            })
        }
    }
    play.addEventListener('click', eventCallback) //Adiciona a função callback ao evento de click no botão
}

export function createNewSortEvent(page) {
    const newSort = document.querySelector('#new-sort') //Seleciona o botão de novo sort
    newSort.addEventListener('click', () => { //Cria um evento no botão de new sort
        toggleButtons(false)
        emptyGraph() //Esvazia o gráfico para receber o novo array
        const array = createArrays() //Cria um novo array na tela e recebe seus valores
        createPlayEvent(page, array) //Cria um novo evento de play que corresponde ao novo array
    })
}

export function toggleButtons(state, disablePlay = false) {
    const play = document.querySelector('#play')
    const newSort = document.querySelector('#new-sort')

    if (!disablePlay) play.disabled = state //Habilita o play apenas quando o algoritmo estiver não ordenado
    newSort.disabled = state
    //Habilita / desabilita os botões de acordo com o parâmetro
}

function emptyGraph() {
    document.querySelector('#graph').innerHTML = '' //Esvazia o HTML do gráfico
}