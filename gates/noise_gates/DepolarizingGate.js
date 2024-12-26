class DepolarizingGate {
  constructor(probability) {
    this.name = 'DepolarizingGate';
    this.probability = probability; // احتمال إضافة ضوضاء
  }

  apply(qubit) {
    const randomProb = Math.random();
    if (randomProb < this.probability) {
      // التدهور العشوائي للكيوبت، بحيث يأخذ حالة عشوائية
      qubit.state = Math.floor(Math.random() * 2); // إما 0 أو 1
      console.log(`Qubit depolarized to state: ${qubit.state}`);
    } else {
      console.log(`Qubit remains in state: ${qubit.state}`);
    }
    return qubit;
  }
}

module.exports = DepolarizingGate;
