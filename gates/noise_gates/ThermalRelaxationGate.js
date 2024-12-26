class ThermalRelaxationGate {
  constructor(relaxationRate) {
    this.name = 'ThermalRelaxationGate';
    this.relaxationRate = relaxationRate; // معدل الاسترخاء
  }

  apply(qubit) {
    const randomProb = Math.random();
    if (randomProb < this.relaxationRate) {
      // يتم التأثير على الكيوبت ويعود إلى حالة |0⟩ بسبب الاسترخاء الحراري
      qubit.state = 0;
      console.log(`Qubit relaxed to state: ${qubit.state}`);
    } else {
      console.log(`Qubit remains in state: ${qubit.state}`);
    }
    return qubit;
  }
}

module.exports = ThermalRelaxationGate;
