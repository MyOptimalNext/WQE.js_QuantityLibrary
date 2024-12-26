class TGate {
  constructor() {
    this.name = 'TGate';
    this.matrix = [
      [1, 0],
      [0, Math.exp(Math.PI / 4 * Math.i)],  // تطبيق طور 45 درجة (π/4)
    ];
  }

  apply(qubit) {
    console.log(`Applying TGate to qubit with state: ${qubit.state}`);
    // تطبيق المصفوفة على حالة الكيوبت
    qubit.state = this.matrix[0][0] * qubit.state + this.matrix[1][0] * qubit.state;
    return qubit;
  }
}

module.exports = TGate;
