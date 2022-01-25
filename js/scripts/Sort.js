import { manipulateElements } from '../script.js'

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
			}, 2000 * i)

		}
	}
}

export class InsertionSort extends Sort {
	sort(array) {
		for (let i = 1; i < array.length; i++) {
			for (let j = i; j > 0 && this.less(array[j], array[j - 1]); j--)
				this.exch(array, j, j - 1);
		}
	}
}

export class ShellSort extends Sort {
	sort(array) {
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
					this.exch(array, j, j - gap);
			}
			gap /= 2;
		}
	}
}


class MergeSort extends Sort {
	//Merge
	sort(array) {
		let length = array.length;
		if (length <= 1)
			return;
		this.sort(array, 0, length - 1)
		this.auxiliary = new Array(length);
	}
	sort(array, left, right) {
		if (left >= right) {
			return;
		}
		let middle = left + parseInt((right - 1) / 2);
		this.sort(array, left, middle);
		this.sort(array, middle + 1, right);
		this.merge(array, left, middle, right);
	}
	merge(array, left, middle, right) {
		 let firstIndex = left, secondIndex = middle + 1;
		 for(let i = left; i <= right; i++){
			 this.auxiliary[i] = array[i];
		 }

		 for(let i = left; i <= right; i++){
			 if(firstIndex > middle) array[i] = this.auxiliary[secondIndex++];
			 else if (secondIndex > right) array[i] = this.auxiliary[firstIndex++];
			 else if (this.less(this.auxiliary[firstIndex], this.auxiliary[secondIndex])) array[i] = this.auxiliary[firstIndex++];
			 else array[i] = this.auxiliary[secondIndex++];
		 }

	}
}