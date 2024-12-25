class CCXGate {
  constructor() {
    this.matrix = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0]
    ];
  }

  apply(controlQubit1, controlQubit2, targetQubit) {
    const qubits = [controlQubit1, controlQubit2, targetQubit];
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

module.exports = CCXGate;
