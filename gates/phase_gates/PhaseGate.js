class PhaseGate {
    constructor(phase) {
        this.name = "Phase Gate";
        this.type = "Phase";
        this.phase = phase; // الزاوية التي يتم من خلالها تعديل المرحلة
    }

    // تطبيق البوابة على الكيوبت
    apply(qubit) {
        // حساب المرحلة الجديدة للكيوبت باستخدام دالة أسينتري
        let realPart = Math.cos(this.phase) * qubit.real - Math.sin(this.phase) * qubit.imaginary;
        let imaginaryPart = Math.sin(this.phase) * qubit.real + Math.cos(this.phase) * qubit.imaginary;
        
        return { real: realPart, imaginary: imaginaryPart };
    }
}

module.exports = PhaseGate;
