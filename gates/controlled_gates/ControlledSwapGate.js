class ControlledSwapGate {
  constructor() {
    this.matrix = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1]
    ];
  }

  apply(controlQubit, targetQubit1, targetQubit2) {
    const qubits = [controlQubit, targetQubit1, targetQubit2];
    return this.multiplyMatrix(qubits);
  }

  multiplyMatrix(qubits) {
    let result = Array(8).fill(0);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        result[i] += this.matrix[i][j] * qubits[j];
      }
    }
    return result;
  }
}

module.exports = ControlledSwapGate;
