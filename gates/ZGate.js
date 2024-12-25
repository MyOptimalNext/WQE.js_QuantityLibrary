// gates/ZGate.js

class ZGate {
    // تطبيق بوابة Z على الكيوبت
    static apply(qubit) {
        const currentState = qubit.getState();
        // تضيف بوابة Z عاملًا طوريًا على |1⟩
        qubit.setState(currentState.alpha, -currentState.beta);
    }
}

export default ZGate;
