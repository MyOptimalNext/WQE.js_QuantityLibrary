class ZZGate {
  constructor(angle) {
    this.angle = angle;
  }

  apply(qubits) {
    const phase = Math.exp(-1j * this.angle / 2); // زاوية الدوران
    qubits[0] *= phase;
    qubits[1] *= phase;
  }
}

export default ZZGate;
