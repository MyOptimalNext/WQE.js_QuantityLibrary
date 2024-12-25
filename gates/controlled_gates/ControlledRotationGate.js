class ControlledRotationGate {
  constructor(theta, phi, lambda) {
    this.matrix = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, Math.cos(theta / 2), -Math.exp(Math.i * lambda) * Math.sin(theta / 2)],
      [0, 0, Math.exp(Math.i * phi) * Math.sin(theta / 2), Math.exp(Math.i * (phi + lambda)) * Math.cos(theta / 2)],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
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

module.exports = ControlledRotationGate;
