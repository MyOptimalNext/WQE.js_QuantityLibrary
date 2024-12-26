class ResetGate {
  constructor() {
    this.name = 'ResetGate';
  }

  apply(qubit) {
    // إعادة الكيوبت إلى الحالة الأساسية |0⟩
    qubit.state = 0;
    console.log(`Qubit reset to state: ${qubit.state}`);
    return qubit;
  }
}

module.exports = ResetGate;
