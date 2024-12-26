class BitFlipGate {
  constructor() {
    this.name = 'BitFlipGate';
  }

  apply(qubit) {
    console.log(`Applying Bit Flip Gate to qubit with state: ${qubit.state}`);
    // تبديل الحالة من |0⟩ إلى |1⟩ أو العكس
    qubit.state = qubit.state[0] === 0 ? [0, 1] : [1, 0];
    console.log(`New state: ${qubit.state}`);
    return qubit;
  }
}

module.exports = BitFlipGate;
