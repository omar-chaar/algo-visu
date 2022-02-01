import sideMenu from "./template/menu.js";
import { createPlayEvent, createNewSortEvent} from './methods/events.js'
import {createArrays} from './methods/arrays.js'

const pages = [
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

function header(){
    const header = document.querySelector('#header')
    const nav = document.createElement('nav')
    nav.id = 'desktop-nav'
    const logo = document.createElement('a')
    const title = document.createElement('h1')
    title.classList.add('logo', 'nav-item')
    title.innerText = 'Algorithm Visualizer'
    logo.setAttribute('href', 'index.html')
    logo.append(title)
    nav.append(logo)

    const mobileNav = document.createElement('nav')
    mobileNav.id = 'mobile-nav'
    const closeMenu = document.createElement('span')
    closeMenu.id = 'close-menu'
    closeMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#666" viewBox="0 0 16 16">' + 
                                '<path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>' + 
                                '<path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>' + 
                           '</svg>'

    mobileNav.append(closeMenu)
                           
    pages.forEach(element => {
        const navItem = document.createElement('a')
        const mobileItem = document.createElement('a')

        navItem.classList.add('nav-item', 'desktop-item')
        mobileItem.classList.add('nav-item')

        navItem.setAttribute('href', element.url)
        mobileItem.setAttribute('href', element.url)

        mobileItem.innerText = element.title
        navItem.innerText = element.title
        
        nav.append(navItem)
        mobileNav.append(mobileItem)
    })

    const hamburger = document.createElement('span')
    hamburger.id = 'hamburger'
    hamburger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#333" viewBox="0 0 16 16">' + 
                                '<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>' + 
                           '</svg>'
    nav.append(hamburger)
    header.append(nav, mobileNav)
    
    
}

window.addEventListener('load', () => {
    header()
    sideMenu()
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