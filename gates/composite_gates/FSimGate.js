class FSimGate {
  constructor(theta, phi) {
    this.theta = theta;
    this.phi = phi;
  }

  apply(qubits) {
    const cosTheta = Math.cos(this.theta);
    const sinTheta = Math.sin(this.theta);
    const phase = Math.exp(-1j * this.phi);

    const newQubits = [
      cosTheta * qubits[0] - sinTheta * qubits[1],
      cosTheta * qubits[1] - sinTheta * qubits[0],
    ];

    qubits[0] = newQubits[0] * phase;
    qubits[1] = newQubits[1] * phase;
  }
}

export default FSimGate;
