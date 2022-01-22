let open = false

function toggleMenu(status){
    const menu = document.querySelector('#mobile-nav')
    menu.style.display = open ? 'none' : 'flex'
    open = !open
}

const sideMenu = () => {
    document.querySelector('#hamburger').addEventListener('click', toggleMenu)
    document.querySelector('#close-menu').addEventListener('click', toggleMenu)
}

export default sideMenu