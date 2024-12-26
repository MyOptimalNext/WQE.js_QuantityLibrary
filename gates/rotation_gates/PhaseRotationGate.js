class PhaseRotationGate {
    constructor(phase) {
        this.name = "Phase Rotation Gate";
        this.type = "Rotation";
        this.phase = phase; // الزاوية التي يتم من خلالها تدوير المرحلة
    }

    // تطبيق البوابة على الكيوبت
    apply(qubit) {
        // حساب الأجزاء الحقيقية والتخيلية بعد تطبيق التدوير على المرحلة
        let realPart = Math.cos(this.phase) * qubit.real - Math.sin(this.phase) * qubit.imaginary;
        let imaginaryPart = Math.sin(this.phase) * qubit.real + Math.cos(this.phase) * qubit.imaginary;
        
        return { real: realPart, imaginary: imaginaryPart };
    }
}

module.exports = PhaseRotationGate;
