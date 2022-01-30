import { SelectionSort, InsertionSort, ShellSort, MergeSort } from '../scripts/Sort.js'

const sortingFunctions = {
    0: function selectionSort(array) {
        const sort = new SelectionSort()
        sort.sort(array)
    },
    1: function insertionSort(array) {
        const sort = new InsertionSort()
        sort.sort(array)
    },
    2: async function shellSort(array) {
        const sort = new ShellSort()
        await sort.sort(array)
        return
    },
    3: async function mergeSort(array) {
        const sort = new MergeSort()
        await sort.sort(array)
        return
    }
}

export default sortingFunctions
