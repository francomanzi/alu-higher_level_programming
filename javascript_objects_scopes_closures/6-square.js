#!/usr/bin/node

const Square = require('./5-square');

class SquarePrinter extends Square {
  charPrint(c) {
    if (!this.width || !this.height) {
      return;
    }
    const char = c === undefined ? 'X' : c;
    for (let i = 0; i < this.height; i += 1) {
      let line = '';
      for (let j = 0; j < this.width; j += 1) {
        line += char;
      }
      console.log(line);
    }
  }
}

module.exports = SquarePrinter;

