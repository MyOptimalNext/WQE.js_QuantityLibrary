class CSPhaseGate {
  constructor(phi) {
    this.matrix = [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, Math.exp(Math.i * phi), 0],
      [0, 0, 0, Math.exp(Math.i * phi)]
    ];
  }

  apply(controlQubit, targetQubit) {
    const qubits = [controlQubit, targetQubit];
    return this.multiplyMatrix(qubits);
  }

  multiplyMatrix(qubits) {
    let result = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        result[i] += this.matrix[i][j] * qubits[j];
      }
    }
    return result;
  }
}

module.exports = CSPhaseGate;
