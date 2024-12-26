class AmplitudeDampingGate {
  constructor(dampingRate) {
    this.name = 'AmplitudeDampingGate';
    this.dampingRate = dampingRate; // معدل التخميد
  }

  apply(qubit) {
    const randomProb = Math.random();
    if (randomProb < this.dampingRate) {
      // التخميد يعني أن الكيوبت ينتقل إلى الحالة |0⟩
      qubit.state = 0;
      console.log(`Qubit damped to state: ${qubit.state}`);
    } else {
      console.log(`Qubit remains in state: ${qubit.state}`);
    }
    return qubit;
  }
}

module.exports = AmplitudeDampingGate;
