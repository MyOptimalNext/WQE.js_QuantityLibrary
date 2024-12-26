class NoisyQuantumGate {
  constructor() {
    this.name = 'NoisyQuantumGate';
  }

  apply(qubit) {
    console.log(`Applying Noisy Quantum Gate to qubit with state: ${qubit.state}`);
    // إضافة ضوضاء عشوائية إلى الكيوبت
    if (Math.random() > 0.8) {
      console.log("Noise added to qubit!");
      qubit.state = [Math.random(), Math.random()]; // تطبيق ضوضاء عشوائية
    }
    return qubit;
  }
}

module.exports = NoisyQuantumGate;
