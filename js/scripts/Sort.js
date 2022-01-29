import { manipulateElements, manipulateMerge } from '../script.js'

class Sort {
	constructor(size) {
		if (this.constructor === Sort) {
			throw new TypeError(
				'Abstract class "Sort" cannot be instantiated directly.'
			);
		}
	}

	exch(array, i, j) {
		let swap = array[i];
		array[i] = array[j];
		array[j] = swap;
		manipulateElements(i, j)
	}

	asyncExch(array, i, j) {
		return new Promise(resolve => {
			setTimeout(() => {
				let swap = array[i];
				array[i] = array[j];
				array[j] = swap;
				manipulateElements(i, j)
				resolve()
			}, 1500)
		})
	}

	less(firstValue, secondValue) {
		return firstValue - secondValue < 0;
	}

	show(array) {
		console.log(array);
	}

	isSorted(array) {
		for (let i = 1; i < array.length; i++) {
			if (this.less(array[i], array[i - 1])) {
				return false;
			}
		}
		return true;
	}
} //End of Sort
export class SelectionSort extends Sort {
	sort(array) {
		for (let i = 0; i < array.length; i++) {
			setTimeout(() => {
				let min = i;
				for (let j = i + 1; j < array.length; j++)
					if (this.less(array[j], array[min])) min = j;
				this.exch(array, i, min);
			}, 1500 * i)

		}
	}
}

export class InsertionSort extends Sort {
	sort(array) {
		for (let i = 1; i < array.length; i++) {
			setTimeout(() => {
				for (let j = i; j > 0 && this.less(array[j], array[j - 1]); j--)
					this.exch(array, j, j - 1);
			}, i * 1500)
		}
	}
}

export class ShellSort extends Sort {
	async sort(array) {
		let size = array.length;
		let gap = 1;
		while (gap < size) {
			gap = 3 * gap + 1;
		}
		while (gap > 0) {
			for (let i = gap; i < size; i++) {
				for (
					let j = i;
					j >= gap && this.less(array[j], array[j - gap]);
					j -= gap
				)
					await this.asyncExch(array, j, j - gap);
			}
			gap = parseInt(gap / 3);
		}
	}
}


export class MergeSort extends Sort {
	//Merge
	sort(array) {
		this.auxiliary = new Array(array.length);
		for (let i = 0; i < array.length; i++) {
			this.auxiliary[i] = array[i];
		}
		this.mergeSort(array, 0, array.length - 1);
	}
	async mergeSort(array, left, right) {
		if (left >= right) {
			return;
		}
		let middle = left + parseInt((right - left) / 2);
		await this.mergeSort(array, left, middle);
		await this.mergeSort(array, middle + 1, right);
		await this.merge(array, left, middle, right);
	}
	merge(array, left, middle, right) {
		return new Promise((resolve) => {
			let firstIndex = left, secondIndex = middle + 1;
			for (let i = left; i <= right; i++) {
				this.auxiliary[i] = array[i];
				manipulateMerge(i, i, true)
			}

			let i = left

			const interval = setInterval(() => {
				if (firstIndex > middle) {
					manipulateMerge(i, secondIndex)
					array[i] = this.auxiliary[secondIndex++];
				}
				else if (secondIndex > right) {
					manipulateMerge(i, firstIndex)
					array[i] = this.auxiliary[firstIndex++];
				}
				else if (this.less(this.auxiliary[firstIndex], this.auxiliary[secondIndex])) {
					manipulateMerge(i, firstIndex)
					array[i] = this.auxiliary[firstIndex++];
				}
				else {
					manipulateMerge(i, secondIndex)
					array[i] = this.auxiliary[secondIndex++];

				}
				i += 1
				if (i > right) {
					clearInterval(interval)
					resolve()
				}
			}, 1500)
			
			/* for (let i = left; i <= right; i++) {
				if (firstIndex > middle) {
					manipulateMerge(i, secondIndex)
					array[i] = this.auxiliary[secondIndex++];
				}
				else if (secondIndex > right) {
					manipulateMerge(i, firstIndex)
					array[i] = this.auxiliary[firstIndex++];
				}
				else if (this.less(this.auxiliary[firstIndex], this.auxiliary[secondIndex])) {
					manipulateMerge(i, firstIndex)
					array[i] = this.auxiliary[firstIndex++];
				}
				else {
					manipulateMerge(i, secondIndex)
					array[i] = this.auxiliary[secondIndex++];

				}
			} */

		})
	}
}