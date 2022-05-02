const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
/* 
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
} */
/*
npm run test --test test/binary-search-tree.test
*/
class BinarySearchTree {
  constructor() {
    this.rooty = null;
  }

  root() {
    return this.rooty;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.rooty)
      this.rooty = newNode;
    else
      this.insertNode(this.rooty, newNode);
  }

  insertNode(current, newNode) {
    if (newNode.data < current.data) {
      if (!current.left)
        current.left = newNode;
      else
        this.insertNode(current.left, newNode);
    }
    else {
      if (!current.right)
        current.right = newNode;
      else
        this.insertNode(current.right, newNode);
    }
  }

  hasfind(current, data) {
    if (!current) return null;
    if (data < current.data) return this.hasfind(current.left, data);
    if (data > current.data) return this.hasfind(current.right, data);
    return current;
  }

  has(data) {
    return !!this.hasfind(this.rooty, data);
  }

  find(data) {
    return this.hasfind(this.rooty, data);
  }


  remove(data) {
    this.rooty = this.removeNode(this.rooty, data);
  }

  removeNode(current, data) {

    if (!current) return null;

    if (data < current.data) {
      current.left = this.removeNode(current.left, data);
      return current;
    }

    else if (data > current.data) {
      current.right = this.removeNode(current.right, data);
      return current;
    }

    else {
      if (!current.left && !current.right) {
        current = null;
        return current;
      }

      if (!current.left) {
        current = current.right;
        return current;
      }

      if (!current.right) {
        current = current.left;
        return current;
      }

      let leaf = this.findMinNode(current.right);
      current.data = leaf.data;

      current.right = this.removeNode(current.right, leaf.data);
      return current;
    }

  }

  findMinNode(current) {
    if (!current.left) return current;
    return this.findMinNode(current.left);
  }
  min() {
    if (!this.rooty) return null;
    return this.findMinNode(this.rooty).data;
  }

  findMaxNode(current) {
    if (!current.right) return current;
    return this.findMaxNode(current.right);
  }
  max() {
    if (!this.rooty) return null;
    return this.findMaxNode(this.rooty).data;
  }
}

module.exports = {
  BinarySearchTree
}