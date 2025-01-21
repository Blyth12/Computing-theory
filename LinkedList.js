/** BASIC LEVEL */
function search(data) {
  let item = head
  while(item != null) {
    if (item.data == data){
      console.log(data + " found")
      return true
    }
    item = item.next
  }
  console.log(data + " not found")
  return false
  // iterate through the list starting at head
  // return true if you find the data item
  // false otherwise
}

/** INTERMEDIATE LEVEL */
function remove(data) {
  let previous = null
  let item = head
  while(item != null) {
    if (item.data == data){
      
      console.log(data + " found")
      return true
    }
    previous = item
    item = item.next
  }
  console.log(data + " not found")
  return false
  // iterate through the list
  // if you find the data item then delete it and return true
  // otherwise return false
}

/** ADVANCED LEVEL */
function add(data) {
  // create a new node with the data
  let newNode = new LLNode(data)
  // starting at the beginning ...
  let item = head
  let prev = null

  // locate the position to add new node (use a loop)
  // if insertion point is at start of list then modify head
  // otherwise modify previous item
}



// SPLIT //



class LLNode {
  constructor(d) {
    this.data = d
    this.next = null
  }
}
let head = null
/** Add exercise code in here */

/** NO NEED TO TOUCH CODE BELOW HERE */
function dump() {
  let item = head
  while (item != null) {
    console.log(item.data)
    item = item.next
  }
}

function test1() {
  hardCodedList()
  dump()
  console.log('ferret exists', search('ferret'))
  console.log('pigs exists', search('pigs'))
}

function test2() {
  hardCodedList()
  remove('goose')
  dump()
  console.log('goose exists', search('goose'))
  console.log('pig exists', search('pig'))
}

function test3() {
  head = null
  add('duck')
  add('ferret')
  add('camel')
  add('goose')
  add('ant')
  dump()
}

function hardCodedList() {
  head = new LLNode('duck')
  head.next = new LLNode('ferret')
  head.next.next = new LLNode('goose')
  head.next.next.next = new LLNode('pig')
  head.next.next.next.next = new LLNode('tiger')
}

//To run
hardCodedList()
dump()

