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
class SelectionSort extends Sort{
    sort(array){        
        for(let i in array){
            let min = i;
            for(let j = i + 1; j < array.size();j++)
                if(this.less(array[j],array[min]))
                    min = j;
            this.exch(array,i,min)
        }
    }
}

class InsertionSort extends Sort{
    sort(array){
        for(let i = 1; i < array.size(); i++){
            for(let j = i; j > 0 && this.less(array[j],array[j-1]);j--)
                this.exch(array,j,j-1);
        }
    }
}