// بوابات الـ single-qubit
import XGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/XGate.js';
import YGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/YGate.js';
import ZGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/ZGate.js';
import HGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/HGate.js';
import SGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/SGate.js';
import TGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/TGate.js';
import IdentityGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/IdentityGate.js';
import RXGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/RXGate.js';
import RYGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/RYGate.js';
import RZGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/RZGate.js';
import PhasedXZGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/PhasedXZGate.js';
import UGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/single_qubit/UGate.js';

// بوابات الـ controlled
import CXGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CXGate.js';
import CYGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CYGate.js';
import CZGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CZGate.js';
import CCXGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CCXGate.js';
import CSWAPGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CSWAPGate.js';
import CPhaseGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CPhaseGate.js';
import CSPhaseGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CSPhaseGate.js';
import CCPhaseGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CCPhaseGate.js';
import CUGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/CUGate.js';
import ControlledSwapGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/ControlledSwapGate.js';
import ControlledRotationGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/controlled_gates/ControlledRotationGate.js';

// بوابات composite
import SWAPGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/composite_gates/SWAPGate.js';
import ISwapGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/composite_gates/ISwapGate.js';
import XXGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/composite_gates/XXGate.js';
import YYGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/composite_gates/YYGate.js';
import ZZGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/composite_gates/ZZGate.js';
import FSimGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/composite_gates/FSimGate.js';

// بوابات multi-qubit
import ToffoliGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/multi_qubit/ToffoliGate.js';
import FredkinGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/multi_qubit/FredkinGate.js';
import QFTGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/multi_qubit/QFTGate.js';
import QuantumFourierTransformGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/multi_qubit/QuantumFourierTransformGate.js';

// بوابات القياس
import MeasureGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/measurement_gates/MeasureGate.js';
import ResetGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/measurement_gates/ResetGate.js';
import BellStateMeasurementGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/measurement_gates/BellStateMeasurementGate.js';
import GHZMeasurementGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/measurement_gates/GHZMeasurementGate.js';

// بوابات noise
import DepolarizingGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/noise_gates/DepolarizingGate.js';
import AmplitudeDampingGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/noise_gates/AmplitudeDampingGate.js';
import PhaseDampingGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/noise_gates/PhaseDampingGate.js';
import ThermalRelaxationGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/noise_gates/ThermalRelaxationGate.js';

// بوابات القياس القياسية
import XMeasurementGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/standard_measurement_gates/XMeasurementGate.js';
import YMeasurementGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/standard_measurement_gates/YMeasurementGate.js';
import ZMeasurementGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/standard_measurement_gates/ZMeasurementGate.js';

// بوابات خاصة
import QuantumErrorCorrectionGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/special_cases/QuantumErrorCorrectionGate.js';
import TopologicalGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/special_cases/TopologicalGate.js';
import NoisyQuantumGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/special_cases/NoisyQuantumGate.js';
import AdaptiveQuantumGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/special_cases/AdaptiveQuantumGate.js';
import BitFlipGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/special_cases/BitFlipGate.js';
import PhaseFlipGate from 'https://cdn.jsdelivr.net/gh/MyOptimalNext/WQE.js_QuantumLib@main/gates/special_cases/PhaseFlipGate.js';

// تصدير كل البوابات الكمومية
export {
    // بوابات الـ single-qubit
    XGate, YGate, ZGate, HGate, SGate, TGate, IdentityGate, RXGate, RYGate, RZGate, PhasedXZGate, UGate,
    // بوابات الـ controlled
    CXGate, CYGate, CZGate, CCXGate, CSWAPGate, CPhaseGate, CSPhaseGate, CCPhaseGate, CUGate, ControlledSwapGate, ControlledRotationGate,
    // بوابات composite
    SWAPGate, ISwapGate, XXGate, YYGate, ZZGate, FSimGate,
    // بوابات multi-qubit
    ToffoliGate, FredkinGate, QFTGate, QuantumFourierTransformGate,
    // بوابات القياس
    MeasureGate, ResetGate, BellStateMeasurementGate, GHZMeasurementGate,
    // بوابات noise
    DepolarizingGate, AmplitudeDampingGate, PhaseDampingGate, ThermalRelaxationGate,
    // بوابات القياس القياسية
    XMeasurementGate, YMeasurementGate, ZMeasurementGate,
    // بوابات خاصة
    QuantumErrorCorrectionGate, TopologicalGate, NoisyQuantumGate, AdaptiveQuantumGate, BitFlipGate, PhaseFlipGate
};
