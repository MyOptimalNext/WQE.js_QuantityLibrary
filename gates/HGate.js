// gates/HGate.js

class HGate {
    // تطبيق بوابة H على الكيوبت
    static apply(qubit) {
        const currentState = qubit.getState();
        // بوابة H تحول |0⟩ و |1⟩ إلى تراكب متساوي الاحتمال بينهما
        const alpha = (Math.sqrt(0.5) * (currentState.alpha + currentState.beta));
        const beta = (Math.sqrt(0.5) * (currentState.alpha - currentState.beta));
        qubit.setState(alpha, beta);
    }
}

export default HGate;
