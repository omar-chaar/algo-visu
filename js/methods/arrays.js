export function createArrays() {
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

    return displayArray
}

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