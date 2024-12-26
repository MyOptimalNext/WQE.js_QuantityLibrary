class FredkinGate {
    constructor() {
        this.name = "Fredkin Gate";
        this.type = "Multi-Qubit";
    }

    apply(state) {
        // تطبيق البوابة على 3 كيوبتات
        let qubits = state.qubits;
        if (qubits[0] === 1) {
            let temp = qubits[1];
            qubits[1] = qubits[2];
            qubits[2] = temp;
        }
        return state;
    }
}

module.exports = FredkinGate;
