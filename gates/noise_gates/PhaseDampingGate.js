class PhaseDampingGate {
  constructor(dampingRate) {
    this.name = 'PhaseDampingGate';
    this.dampingRate = dampingRate; // معدل التخميد
  }

  apply(qubit) {
    const randomProb = Math.random();
    if (randomProb < this.dampingRate) {
      // إضافة ضوضاء إلى الطور، مما يغير حالة الكيوبت
      qubit.phase += Math.random() * Math.PI; // تغيير الطور
      console.log(`Qubit phase damped: ${qubit.phase}`);
    } else {
      console.log(`Qubit remains in state with phase: ${qubit.phase}`);
    }
    return qubit;
  }
}

module.exports = PhaseDampingGate;
