class MeasureGate {
  constructor() {
    this.name = 'MeasureGate';
  }

  apply(qubit) {
    // يتم قياس الكيوبت
    const probability = Math.random(); // توليد احتمال عشوائي لقياس القيمة

    if (probability < 0.5) {
      qubit.state = 0; // حالة 0
    } else {
      qubit.state = 1; // حالة 1
    }
    console.log(`Qubit measured in state: ${qubit.state}`);
    return qubit;
  }
}

module.exports = MeasureGate;
