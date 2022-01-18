//Abstract class Union Find
class UnionFind {
	constructor(size) {
		if (this.constructor === UnionFind) {
			throw new TypeError(
				'Abstract class "UnionFind" cannot be instantiated directly.'
			);
		}
        this.count = size;
        this.elements = new Array(size);
        for(let i =0; i < elements.size();i++)
            elements[i] = i;
	}

    find() {
        throw new Error("Method 'find()' must be implemented.");
    }

    union(){
        throw new Error("Method 'find()' must be implemented.");
    }
    get count(){
        return this.count;
    }

    connected(idOfP, idOfQ){
        return find(idOfP) == find(idOfQ);
    }

}//End of UnionFind

class QuickUnion extends UnionFind{
    constructor(size){
        super(size);
    }

    find(id){
        while(id != this.elements[id]){
            id = this.elements[id];
        }
        return id;
    }

    union(idOfP, idOfQ){
        let idOfP = this.find(idOfP);
        let idOfQ = this.find(idOfQ);
        if(idOfP == idOfQ) return;
        this.elements[idOfP] = idOfQ;
        this.count--;
    }
}//End of QuickUnion


