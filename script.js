// Players really dislike true randomness, so it is generally modeled with a
// 'grab bag' approach. In this style every value within a range is generated
// and inserted into a collection and then randomized. When a new value is
// requested it is taken off the array. Typically every value is inserted 2-3
// times to allow for seemingly 'random' runs of the same number.

// The DieBag constructor function creates a grab bag of 3x values for a die with
// a number of faces specified in the constructor

class DieBag {
  constructor(numberOfFaces) {
    this.numberOfFaces = numberOfFaces;
    this.values = [];
    for (let iterationCount = 0; iterationCount < 3; iterationCount++) {
        for (let faceCount = 0; faceCount < this.numberOfFaces; faceCount++) {
            this.values.push(faceCount + 1);
        }
    };
    console.log("Object Created")
  }



  drawValue() {return this.values.shift()}

  shuffle() {
      for (let tempVal of this.values) {
          let temp = tempVal;
          let swapIndex = Math.floor(Math.random() * this.values.length);
          tempVal = this.values[swapIndex];
          this.values[swapIndex]= temp;
      }
  }

  itemsRemaining() {return this.values.length}

}

let bag = new DieBag(10);
bag.shuffle();

while (bag.itemsRemaining()) {
    console.log(bag.drawValue());
}
