class VGate {
  constructor() {
    this.name = 'VGate';
    this.matrix = [
      [1, 0],
      [0, Math.exp(Math.PI / 8 * Math.i)],  // تطبيق طور 45 درجة (π/8)
    ];
  }

  apply(qubit) {
    console.log(`Applying VGate to qubit with state: ${qubit.state}`);
    // تطبيق المصفوفة على حالة الكيوبت
    qubit.state = this.matrix[0][0] * qubit.state + this.matrix[1][0] * qubit.state;
    return qubit;
  }
}

module.exports = VGate;
