export default function XGate(qubit) {
    if (qubit === 0) {
        return 1;  // إذا كانت الحالة 0، تصبح 1
    } else if (qubit === 1) {
        return 0;  // إذا كانت الحالة 1، تصبح 0
    } else {
        throw new Error("حالة qubit غير صالحة. يجب أن تكون 0 أو 1");
    }
}
