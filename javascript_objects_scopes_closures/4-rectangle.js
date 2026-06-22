#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (!Number.isInteger(w) || w <= 0 || !Number.isInteger(h) || h <= 0) {
      return;
    }
    this.width = w;
    this.height = h;
  }

  print() {
    if (!this.width || !this.height) {
      return;
    }
    for (let i = 0; i < this.height; i += 1) {
      let line = '';
      for (let j = 0; j < this.width; j += 1) {
        line += 'X';
      }
      console.log(line);
    }
  }

  rotate() {
    const tmp = this.width;
    this.width = this.height;
    this.height = tmp;
  }

  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;

