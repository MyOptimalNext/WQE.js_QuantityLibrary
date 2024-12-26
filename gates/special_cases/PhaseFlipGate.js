class PhaseFlipGate {
  constructor() {
    this.name = 'PhaseFlipGate';
  }

  apply(qubit) {
    console.log(`Applying Phase Flip Gate to qubit with state: ${qubit.state}`);
    // تغيير الطور للكيوبت
    qubit.state = [qubit.state[0], -qubit.state[1]]; // تبديل الإشارة في المكون الثاني
    console.log(`New state: ${qubit.state}`);
    return qubit;
  }
}

module.exports = PhaseFlipGate;
