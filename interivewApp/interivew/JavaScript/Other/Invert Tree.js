function invertTree (root) {
    
    if( root != null ){
        
        // General case:
        // invert child node of current root
        [root.left, root.right] = [root.right, root.left];
        
        // invert subtree with DFS
        invertTree(root.left);
        invertTree(root.right);
        return root;
        
    }else{
        
        // Base case:
        // empty tree or empty node
        return null; 
    }
    
};
//2ndway

// Runtime: 64 ms, faster than 92.88% of JavaScript online submissions for Invert Binary Tree.
var invertTree = function(root) {
    // Base case...
    if(root == null){
        return root
    }
    // Call the function recursively for the left subtree...
    invertTree(root.left)
    // Call the function recursively for the right subtree...
    invertTree(root.right)
    // swapping process...
    const curr = root.left
    root.left = root.right
    root.right = curr
    return root         // Return the root...   
};
//3

var invertTree = function(root) {
    if(!root) return null;

    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTree(root.right)
    invertTree(root.left)
    return root
};
