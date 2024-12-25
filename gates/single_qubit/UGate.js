class UGate {
  constructor(theta, phi, lambda) {
    this.matrix = [
      [Math.cos(theta / 2), -Math.exp(Math.i * lambda) * Math.sin(theta / 2)],
      [Math.exp(Math.i * phi) * Math.sin(theta / 2), Math.exp(Math.i * (phi + lambda)) * Math.cos(theta / 2)]
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

module.exports = UGate;
