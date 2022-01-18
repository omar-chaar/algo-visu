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
}//End of Sort