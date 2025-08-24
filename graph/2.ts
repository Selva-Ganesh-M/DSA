export type Matrix<T> = Array<Array<T>>

const noOfIslands = (islandMatrix: Matrix<number>): void => {
    let length = islandMatrix.length;
    let width = (islandMatrix?.[0] ?? []).length
    const visited: Matrix<number> = Array(length).fill(Array(width).fill(0)).filter(Boolean);
    console.log(visited)

    let result = 0;
    for (let i=0; i<length; i++){
        for (let j=0; j<width; j++){
            if ( islandMatrix[i][j]===1 && visited[i][j]==0){
                visitNode(i, j)
            }
        }
    }

    console.log({noOfIslands: result})

    function visitNode(i: number, j: number){
        result++;
        console.log(`visiting ${i} ${j}`)
        console.log(visited)
        for (let x = -1; x<=1; x++){
            for (let y = -1; y<=1; y++){
                let newX = i+x;
                let newY = j+y;
                if (newX>-1 && newX<length && newY>-1&& newY<width){
                    if (islandMatrix[newX][newY]===1 && visited[newX][newY]==0){
                        visited[newX][newY]=1
                    }
                }
            }
        }
    }
}

const mat = [
    [0,1,1,0],
    [0,1,1,0],
    [0,0,1,0],
    [0,0,0,0],
    [1,1,0,1],
]
noOfIslands(mat)