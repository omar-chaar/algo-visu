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

class QuickFind extends UnionFind{
    constructor(size){
        super(size);
    }

    find(id){
        return this.elements[id];
    }

    union(idOfP, idOfQ){
        let idOfP = this.find(idOfP);
        let idOfQ = this.find(idOfQ);
        if(idOfP == idOfQ) return;
        for(let i in elements){
            if(this.elements[i] == idOfP)
                this.elements[i] = idOfQ;
        }
        this.count--;
    }
}//End of QuickFind

class WeightedQuickUnion extends UnionFind{
    constructor(size){
        super(size);
        this.sz = new Array(size);
        for(let i in this.sz){
            this.sz[i] = 1;
        }
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
        if(this.sz[idOfP] < this.sz[idOfQ]){
            this.elements[idOfP] = idOfQ;
            this.sz[idOfQ] += this.sz[idOfP];
        }else{
            this.elements[idOfQ] = idOfP;
            this.sz[idOfP] += this.sz[idOfQ];
        }
        this.count--;
    }
}//End of WeightedQuickUnion