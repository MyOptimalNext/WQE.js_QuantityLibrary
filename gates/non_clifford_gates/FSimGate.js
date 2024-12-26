class FSimGate {
  constructor(theta, phi) {
    this.name = 'FSimGate';
    this.theta = theta; // الزاوية الأولى
    this.phi = phi;     // الزاوية الثانية
    this.matrix = [
      [Math.cos(this.theta / 2), -Math.sin(this.theta / 2) * Math.exp(-Math.i * this.phi)],
      [Math.sin(this.theta / 2) * Math.exp(Math.i * this.phi), Math.cos(this.theta / 2)],
    ];
  }

  apply(qubit) {
    console.log(`Applying FSimGate to qubit with state: ${qubit.state}`);
    // تطبيق المصفوفة على حالة الكيوبت
    qubit.state = this.matrix[0][0] * qubit.state + this.matrix[1][0] * qubit.state;
    return qubit;
  }
}

module.exports = FSimGate;
