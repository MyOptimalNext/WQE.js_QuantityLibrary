class SGate {
  constructor() {
    this.name = 'SGate';
    this.matrix = [
      [1, 0],
      [0, Math.exp(Math.PI / 2 * Math.i)],  // تطبيق طور 90 درجة (π/2)
    ];
  }

  apply(qubit) {
    console.log(`Applying SGate to qubit with state: ${qubit.state}`);
    // تطبيق المصفوفة على حالة الكيوبت
    qubit.state = this.matrix[0][0] * qubit.state + this.matrix[1][0] * qubit.state;
    return qubit;
  }
}

module.exports = SGate;
