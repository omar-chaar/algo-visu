import sideMenu from "./template/menu.js";
import { toggleButtons, createPlayEvent, createNewSortEvent } from './methods/events.js'
import {createArrays} from './methods/arrays.js'
//Toda vez que o usuário selecionar outro algoritmo essa função será invocada com um valor que corresponde ao algortimo
function changePage(page) { //"page" é o valor correspondente ao algoritimo, de 0 à 3, ele será usado para selecionar as funções acima
    let title
    setOpacity(page)
    toggleButtons(false)
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

function setOpacity(val) {
    for (let i = 0; i <= 3; i++) {
        document.querySelector(`#link-${i + 1}`).style.opacity = val === i ? 0.5 : 1
        document.querySelector(`#mob-link-${i + 1}`).style.opacity = val === i ? 0.5 : 1
    }
} //Seta opacidade da navbar no item escolhido

//Essa função auto-invocada será executada quando a página iniciar
(function () {
    sideMenu()
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
            const graph = document.querySelector('#graph')
            const newGraph = graph.cloneNode()
            newGraph.style.display = 'none'
            newGraph.id = 'newGraph'
            graph.after(newGraph)
            changePage(3)
            break
        default:
            changePage(0)
    }
})()