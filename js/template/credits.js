let show = false

const credits = () => {
    document.querySelector('#credits').addEventListener('click', toggleCredits)
    document.querySelector('#close-credits').addEventListener('click', toggleCredits)
}

function toggleCredits(){
    show = !show
    const credits = document.querySelector('#creditsDiv')
    if(show){
        credits.style.display = 'flex'
    }else{
        credits.style.display = 'none'
    }
}

export function creditsDOM(){
    const footer = document.querySelector('#footer')

    const creditsDiv = document.createElement('div')
    creditsDiv.classList.add('creditsDiv')
    creditsDiv.id = 'creditsDiv'

    const creditsWindow = document.createElement('div')
    creditsWindow.classList.add('creditsWindow')

    const closeCredits = document.createElement('div')
    closeCredits.classList.add('close-credits', 'credits-border')
    closeCredits.id = 'close-credits'
    closeCredits.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">' + 
        '<path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>' + 
        '<path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>' + 
    '</svg>'

    const repository = document.createElement('a')
    repository.setAttribute('href', 'https://github.com/omar-chaar/algo-visu')
    repository.setAttribute('target', '_blank')
    repository.setAttribute('title', 'Visit repository')
    repository.classList.add('repository', 'credits-border')
    repository.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">' + 
                                '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>' +
                            '</svg>'

    const firstLink = document.createElement('a')
    firstLink.setAttribute('href', 'https://github.com/omar-chaar')
    firstLink.setAttribute('target', '_blank')
    firstLink.classList.add('dev-link')
    const svgGithub = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="svg" viewBox="0 0 16 16">' + 
                        '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>' +
                      '</svg>'
    firstLink.innerHTML = svgGithub + '<p>Omar Chaar</p>'
    
    const secondLink = document.createElement('a')
    secondLink.setAttribute('href', 'https://gabrielnunes.vercel.app/')
    secondLink.setAttribute('target', '_blank')
    secondLink.classList.add('dev-link')
    const svgCode = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="svg" viewBox="0 0 16 16">' + 
                        '<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>' +
                    '</svg>'
    secondLink.innerHTML = svgCode + '<p>Gabriel Nunes</p>'

    creditsWindow.append(repository, closeCredits, firstLink, secondLink)
    creditsDiv.append(creditsWindow)
    footer.append(creditsDiv)
}

export default credits