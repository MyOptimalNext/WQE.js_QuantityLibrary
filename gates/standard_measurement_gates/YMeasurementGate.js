class YMeasurementGate {
  constructor() {
    this.name = 'YMeasurementGate';
    this.matrix = [
      [1, 0],
      [0, Math.exp(Math.PI / 2 * Math.i)],
    ];
  }

  apply(qubit) {
    console.log(`Applying YMeasurementGate to qubit with state: ${qubit.state}`);
    // هنا يتم القياس في قاعدة Y
    let result = Math.random() > 0.5 ? 1 : 0;
    qubit.state = result === 1 ? [1, 0] : [0, 1];
    console.log(`Measurement result: ${result}`);
    return qubit;
  }
}

module.exports = YMeasurementGate;
