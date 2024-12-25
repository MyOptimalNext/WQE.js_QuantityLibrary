// gates/RZGate.js

class RZGate {
    // تطبيق بوابة RZ على الكيوبت بزاوية θ
    static apply(qubit, theta) {
        const currentState = qubit.getState();
        const exp = Math.exp(-Math.PI * theta / 2);
        
        // تضيف بوابة RZ عاملًا طوريًا بناءً على الزاوية
        const alpha = exp * currentState.alpha;
        const beta = currentState.beta;
        qubit.setState(alpha, beta);
    }
}

export default RZGate;
