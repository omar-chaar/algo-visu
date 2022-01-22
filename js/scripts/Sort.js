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
		if (array.length <= 1)
			return;
		this.sort(array, 0, array.length - 1)
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
		let sizeLeftArray = middle - left + 1;
		let sizeRightArray = right - middle;

		let leftArray = new Array(sizeLeftArray);
		let rightArray = new Array(sizeRightArray);

		for (let i = 0; i < leftArray.length; i++) {
			leftArray[i] = array[left + i];
		}
		for (let i = 0; i < rightArray.length; i++) {
			rightArray[i] = array[middle + 1 + i];
		}

		let leftIndex = 0;
		let rightIndex = 0;
		let mergedIndex = left;
		while (leftIndex < sizeLeftArray && rightIndex < sizeRightArray) {
			if (leftArray[leftIndex] <= rightArray[rightIndex]) {
				array[mergedIndex++] = leftArray[leftIndex++];
			} else {
				array[mergedIndex++] = rightArray[rightIndex++];
			}
		}
		while (leftIndex < sizeLeftArray) {
			array[mergedIndex++] = leftArray[leftIndex++];
		}
		while (rightIndex < sizeRightArray) {
			array[mergedIndex++] = rightArray[rightIndex++];
		}
	}
}