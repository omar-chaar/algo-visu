import sideMenu from "./template/menu.js";
import { createPlayEvent, createNewSortEvent} from './methods/events.js'
import {createArrays} from './methods/arrays.js'

function animHome(){
    const pages = [
        {
            title: 'Selection Sort',
            url: '/selection.html'
        },
        {
            title: 'Insertion Sort',
            url: '/insertion.html'
        },
        {
            title: 'Shell Sort',
            url: '/shell.html'
        },
        {
            title: 'Merge Sort',
            url: '/merge.html'
        }
    ]
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
    sideMenu()
    let page = 0
    switch(location.pathname){
        case '/algo-visu/selection.html':
            page = 0
            break
        case '/algo-visu/insertion.html':
            page = 1
            break
        case '/algo-visu/shell.html':
            page = 2
            break
        case '/algo-visu/merge.html':
            page = 3
            break
        default: 
            return animHome()
    }
    const array = createArrays()
    createPlayEvent(page, array) //Essa função cria um evento no botão, para quando clicar ele disparar o algortimo
    createNewSortEvent(page)

})