// gates/RXGate.js

class RXGate {
    // تطبيق بوابة RX على الكيوبت بزاوية θ
    static apply(qubit, theta) {
        const currentState = qubit.getState();
        const cosTheta = Math.cos(theta / 2);
        const sinTheta = Math.sin(theta / 2);

        // تغيير حالة الكيوبت بناءً على الزاوية
        const alpha = cosTheta * currentState.alpha - sinTheta * currentState.beta;
        const beta = sinTheta * currentState.alpha + cosTheta * currentState.beta;
        qubit.setState(alpha, beta);
    }
}

export default RXGate;
