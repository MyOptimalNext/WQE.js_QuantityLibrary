class ToffoliGate {
    constructor() {
        this.name = "Toffoli Gate";
        this.type = "Multi-Qubit";
    }

    apply(state) {
        // تنشيط البوابة على 3 كيوبتات
        let qubits = state.qubits;
        if (qubits[0] === 1 && qubits[1] === 1) {
            qubits[2] = qubits[2] === 0 ? 1 : 0;
        }
        return state;
    }
}

module.exports = ToffoliGate;
