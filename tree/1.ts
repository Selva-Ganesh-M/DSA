class TreeNode<T> {
    data: T;
    left: TreeNode<T>|null = null
    right: TreeNode<T>|null = null

    constructor(data: T){
        this.data = data
    }

}

class BinaryTree<T> {
    root: TreeNode<T>;
    constructor(node: TreeNode<T>){
        this.root = node
    }

    bfs(){
        if (!this.root){
            return;
        }
        const queue = [this.root]
        let depth = 1
        while(queue.length>0){
            const current = queue.shift()
            if (!current){
                break;
            }
            let currentLevelHadNodes = false
            if (current.left){
                queue.push(current.left)
                currentLevelHadNodes = true
            }
            if (current.right){
                queue.push(current.right)
                currentLevelHadNodes = true
            }
            if (currentLevelHadNodes){
                depth++
            }
        }
        console.log(depth)
    }
}

const tree = new BinaryTree(new TreeNode(1))
tree.root.left = new TreeNode(2)
tree.root.right = new TreeNode(3)
tree.root.right.left = new TreeNode(4)
tree.root.right.right = new TreeNode(6)
tree.root.right.left.left = new TreeNode(5)
tree.bfs()