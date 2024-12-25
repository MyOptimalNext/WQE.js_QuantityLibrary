class SGate {
  constructor() {
    this.matrix = [
      [1, 0],
      [0, Math.exp(Math.PI / 2 * Math.i)]
    ];
  }

  apply(qubit) {
    return this.multiplyMatrix(qubit);
  }

  multiplyMatrix(qubit) {
    let result = [0, 0];
    result[0] = this.matrix[0][0] * qubit[0] + this.matrix[0][1] * qubit[1];
    result[1] = this.matrix[1][0] * qubit[0] + this.matrix[1][1] * qubit[1];
    return result;
  }
}

module.exports = SGate;
