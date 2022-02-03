const auxiliar = []

export function manipulateElements(i, j) {
    //Seleciona barras e valores
    const firstBar = document.querySelector(`#bar-${i}`)
    const secondBar = document.querySelector(`#bar-${j}`)

    const firstValue = document.querySelector(`#value-${i}`)
    const secondValue = document.querySelector(`#value-${j}`)

    //Altera o valor de ambos as barras para se destacar
    firstBar.style.backgroundColor = '#AC1919'
    secondBar.style.backgroundColor = '#003399'

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
        firstBar.style.backgroundColor = '#D6D7D8'
        secondBar.style.backgroundColor = '#D6D7D8'
    }, 1000)
}

//Working only synchronous
export function manipulateMerge(i, j, toAuxiliar) {
    const firstBar = document.querySelector(`#bar-${i}`);
    const firstValue = document.querySelector(`#value-${i}`);
    if (toAuxiliar) {
        firstBar.style.backgroundColor = "#AC1919";
        firstValue.style.color = "#AC1919";
        auxiliar[i] = parseInt(firstValue.innerHTML)
    } else {
        firstBar.style.height = `${auxiliar[j] * 10}px`;
        firstValue.innerHTML = auxiliar[j];
        firstBar.style.backgroundColor = "#D6D7D8";
        firstValue.style.color = "#D6D7D8";
    }
}