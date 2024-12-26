class BellStateMeasurementGate {
  constructor() {
    this.name = 'BellStateMeasurementGate';
  }

  apply(qubit1, qubit2) {
    // قياس زوج من الكيوبتات في حالة بيليه
    const state = [qubit1.state, qubit2.state];
    const bellStates = [
      [0, 0], [1, 1], [0, 1], [1, 0]
    ];

    const measurementResult = bellStates[Math.floor(Math.random() * bellStates.length)];
    qubit1.state = measurementResult[0];
    qubit2.state = measurementResult[1];

    console.log(`Bell state measured: ${measurementResult}`);
    return { qubit1, qubit2 };
  }
}

module.exports = BellStateMeasurementGate;
