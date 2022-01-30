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
        firstBar.style.backgroundColor = "red";
        firstValue.style.color = "red";
        secondBar.style.height = `${parseInt(firstBar.style.height)}px`;
        secondValue.innerHTML = firstValue.innerHTML;
    } else {
        firstBar.style.height = `${parseInt(secondBar.style.height)}px`;
        firstValue.innerHTML = secondValue.innerHTML;
        firstBar.style.backgroundColor = "#333";
        firstValue.style.color = "#333";
    }
}