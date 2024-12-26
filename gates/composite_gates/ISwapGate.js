class ISwapGate {
  apply(qubits) {
    const temp = qubits[0];
    qubits[0] = qubits[1];
    qubits[1] = temp * -1; // يطبق التحويل المترافق (Imaginary Swap)
  }
}

export default ISwapGate;
