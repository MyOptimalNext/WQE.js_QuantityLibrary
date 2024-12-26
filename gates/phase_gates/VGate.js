class VGate {
    constructor() {
        this.name = "V Gate";
        this.type = "Phase";
    }

    // تطبيق البوابة على الكيوبت
    apply(qubit) {
        // تغيير المرحلة بزاوية π/4
        let phase = Math.PI / 4;
        let realPart = Math.cos(phase) * qubit.real - Math.sin(phase) * qubit.imaginary;
        let imaginaryPart = Math.sin(phase) * qubit.real + Math.cos(phase) * qubit.imaginary;
        
        return { real: realPart, imaginary: imaginaryPart };
    }
}

module.exports = VGate;
