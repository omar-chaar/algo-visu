import sideMenu from "./template/menu.js";
import credits, {creditsDOM} from "./template/credits.js";
import header from "./template/header.js";
import footer from "./template/footer.js";
import { createPlayEvent, createNewSortEvent} from './methods/events.js'
import {createArrays} from './methods/arrays.js'

export const pages = [
    {
        title: 'Bubble Sort',
        url: 'bubble.html'
    },
    {
        title: 'Selection Sort',
        url: 'selection.html'
    },
    {
        title: 'Insertion Sort',
        url: 'insertion.html'
    },
    {
        title: 'Shell Sort',
        url: 'shell.html'
    },
    {
        title: 'Merge Sort',
        url: 'merge.html'
    }
]

function animHome(){
    const home = document.querySelector('#home')
    let i = 0;
    const interval = setInterval(() => {
        const newElement = document.createElement('a')
        newElement.classList.add('sortOption')
        newElement.setAttribute('href', pages[i].url)
        const title = document.createElement('h1')
        title.innerText = pages[i].title
        newElement.append(title)
        home.append(newElement)
        i++
        if(i > pages.length-1) clearInterval(interval)
    }, 700)

}

window.addEventListener('load', () => {
    header()
    footer()
    sideMenu()
    creditsDOM()
    credits()
    let page = 0
    const path = location.pathname
    if(path === '/algo-visu/selection.html' || path === '/selection.html'){
        page = 0
    }else if(path === '/algo-visu/insertion.html' || path === '/insertion.html'){
        page = 1
    }else if(path === '/algo-visu/shell.html' || path === '/shell.html'){
        page = 2
    }else if(path === '/algo-visu/merge.html' || path === '/merge.html'){
        page = 3
    }else if(path === '/algo-visu/bubble.html' || path === '/bubble.html'){
        page = 4
    }else{
        return animHome()
    }
    const array = createArrays()
    createPlayEvent(page, array) //Essa função cria um evento no botão, para quando clicar ele disparar o algortimo
    createNewSortEvent(page)

})