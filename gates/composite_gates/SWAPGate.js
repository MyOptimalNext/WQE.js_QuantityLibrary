class SWAPGate {
  apply(qubits) {
    [qubits[0], qubits[1]] = [qubits[1], qubits[0]];
  }
}

export default SWAPGate;
