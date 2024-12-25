// gates/CXGate.js

class CXGate {
    // تطبيق بوابة CNOT على زوج من الكيوبتات
    static apply(controlQubit, targetQubit) {
        const controlState = controlQubit.getState();
        if (Math.abs(controlState.alpha) < Math.abs(controlState.beta)) {
            // إذا كانت حالة المتحكم 1، طبق بوابة X على الهدف
            const targetState = targetQubit.getState();
            targetQubit.setState(targetState.beta, targetState.alpha);
        }
    }
}

export default CXGate;
