class XXGate {
  constructor(angle) {
    this.angle = angle;
  }

  apply(qubits) {
    const cos = Math.cos(this.angle / 2);
    const sin = Math.sin(this.angle / 2);

    qubits[0] = cos * qubits[0] - sin * qubits[1];
    qubits[1] = cos * qubits[1] - sin * qubits[0];
  }
}

export default XXGate;
