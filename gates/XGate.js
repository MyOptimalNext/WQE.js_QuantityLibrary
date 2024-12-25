// gates/XGate.js

class XGate {
    // تطبيق بوابة X على الكيوبت
    static apply(qubit) {
        const currentState = qubit.getState();
        // تقوم بوابة X بتحويل |0⟩ إلى |1⟩ و |1⟩ إلى |0⟩
        qubit.setState(currentState.beta, currentState.alpha);
    }
}

export default XGate;
