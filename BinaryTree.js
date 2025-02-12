class BTNode { // class for a binary tree node
    constructor(data) {
      this.data = data
      this.left = null
      this.right = null
    }
  }
  
  let rt = null // the rootnode of the binary tree
  
  function search(data) {
    let current = rt
    while (true){
        console.log(current)
        if (current == null){
            return false
        }

        if(current.data == data){
            return true
        }

        else if (data < current.data) {
            current = current.left
        }
        
        else if (data > current.data) {
            current = current.right
        }
    }
  }
  
  function insert(data) {
    let current = rt
    while (true){
        console.log(current)
        
        if(current.data == data){
            return false
        }

        else if (data < current.data) {
            if (current.left == null){
                current.left = new BTNode(data)
                return true
            }
            current = current.left
        }
        
        else if (data > current.data) {
            if (current.right == null){
                current.right = new BTNode(data)
                return true
            }
            current = current.right
        }
    }
  }
  
  function deleteAdvisory(data) {
    // add code to display the changes that should be made to the tree when the node is deleted
    return "delete not implemented yet"
  }
  
  
  /** No need to touch any of the code below here 
  It is a bunch of utility functions to make testing easier */
  function testSearch() {
    hardCodedTree()
    console.log("Searching horse should return false", search('horse'))
    console.log("Searching owl should return true", search('owl'))
  }
  function testInsert() {
    hardCodedTree()
    console.log("Adding horse should return true", insert('horse'))
    console.log("Adding owl should return false", insert('owl'))
  }
  function testDelete() {
    hardCodedTree()
    console.log("Deleting zebra should give detail of what to do", deleteAdvisory('zebra'))
    console.log("Deleting horse should return a 'doesn't exist' error of some sort", deleteAdvisory('horse'))
  }
  function hardCodedTree() {
    /** This tree has hard-coded pointer settings as the insert function has not been written yet
    In each case a node containing a word is created and then 'manually' placed at the correct position in the tree by setting the parent's pointer
    */
    rt = new BTNode('lion')
    rt.right = new BTNode('tiger')
    rt.right.left = new BTNode('mouse')
    rt.left = new BTNode('cat')
    rt.left.right = new BTNode('dog')
    rt.right.right = new BTNode('zebra')
    rt.right.right.left = new BTNode('yak')
    rt.right.left.right = new BTNode('owl')
    rt.left.left = new BTNode('aardvark')
    console.log("... tree created")
  }
  function test() {
    testSearch()
    testInsert()
    testDelete()
  }
  function dump() {
    console.log("... ordered list")
    dumptree(rt)
  }
  // don't mess with this code!!
  // this is a recursive in-order traversal of a binary tree
  function dumptree(n) {
    if (n.left) { dumptree(n.left) }
    console.log(n.data)
    if (n.right) { dumptree(n.right) }
  }
  test()
  dump()