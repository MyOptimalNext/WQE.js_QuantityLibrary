class SGate {
    constructor() {
        this.name = "S Gate";
        this.type = "Phase";
    }

    // تطبيق البوابة على الكيوبت
    apply(qubit) {
        // تغيير المرحلة بزاوية π/2
        let phase = Math.PI / 2;
        let realPart = Math.cos(phase) * qubit.real - Math.sin(phase) * qubit.imaginary;
        let imaginaryPart = Math.sin(phase) * qubit.real + Math.cos(phase) * qubit.imaginary;
        
        return { real: realPart, imaginary: imaginaryPart };
    }
}

module.exports = SGate;
