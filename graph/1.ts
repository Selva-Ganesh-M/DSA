type Matrix<T> = Array<Array<T>>;
export class Graph {
    adjMatrix: Matrix<number> = [];

    constructor(adjMatrix: Matrix<number>) {
        this.adjMatrix = adjMatrix;
    }

    public bfs(pos: number, visitedArray: Array<number> = []) {
        const queue = [pos];
        while (queue?.length > 0) {
            const currentElement = queue.shift();
            if (currentElement==undefined) {
                break;
            }
            visitedArray[currentElement] = 1;
            const adjElements = this.adjMatrix[currentElement];
            for (let i = 0; i < adjElements.length; i++) {
                if (adjElements[i] === 1 && i != currentElement && visitedArray[i] != 1) {
                    queue.push(i);
                }
            }
        }
    }

    public noOfProvinces = (index: number) => {
        let startIndex = index - 1;
        const visitedArray: Array<number> = Array(this.adjMatrix.length).fill(
            0
        );
        let result = 1;
        this.bfs(startIndex, visitedArray)
        visitedArray.forEach((pos, index)=>{
            if (!pos){
                result++;
                this.bfs(index, visitedArray)
            }
        })
        console.log(result)
    };
}

const g = new Graph([
    [1,0,1],
    [0,1,0],
    [1,0,1],
])
g.noOfProvinces(1)