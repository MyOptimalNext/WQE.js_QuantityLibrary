class ZMeasurementGate {
  constructor() {
    this.name = 'ZMeasurementGate';
    this.matrix = [
      [1, 0],
      [0, -1],
    ];
  }

  apply(qubit) {
    console.log(`Applying ZMeasurementGate to qubit with state: ${qubit.state}`);
    // هنا يتم القياس في قاعدة Z
    let result = Math.random() > 0.5 ? 1 : 0;
    qubit.state = result === 1 ? [1, 0] : [0, 1];
    console.log(`Measurement result: ${result}`);
    return qubit;
  }
}

module.exports = ZMeasurementGate;
