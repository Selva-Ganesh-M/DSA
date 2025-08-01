class Graph<T extends number | string> {

    private _adjList: Partial<Record<T, Array<T>>> = {}

    constructor(edges: Array<Array<T>>){
        for (let [x, y] of edges){
            if (!this._adjList[x]){
                this._adjList[x]=[y]
            }else{
                this._adjList[x].push(y)
            }
            if (!this._adjList[y]){
                this._adjList[y]=[x]
            }else{
                this._adjList[y].push(x)
            }
        }
    }

    public printAdjList () {
        console.log(this._adjList)
    }

}

const graph = new Graph([[1, 2], [1, 3]])
graph.printAdjList()