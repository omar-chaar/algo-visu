import {pages} from '../script.js'

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
    closeMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 16 16">' + 
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
    hamburger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 16 16">' + 
                                '<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>' + 
                           '</svg>'
    nav.append(hamburger)
    header.append(nav, mobileNav)
    
    
}

export default header