class XMeasurementGate {
  constructor() {
    this.name = 'XMeasurementGate';
    this.matrix = [
      [1, 0],
      [0, -1],
    ];
  }

  apply(qubit) {
    console.log(`Applying XMeasurementGate to qubit with state: ${qubit.state}`);
    // هنا يتم القياس في قاعدة X
    let result = Math.random() > 0.5 ? 1 : 0;
    qubit.state = result === 1 ? [1, 0] : [0, 1];
    console.log(`Measurement result: ${result}`);
    return qubit;
  }
}

module.exports = XMeasurementGate;
