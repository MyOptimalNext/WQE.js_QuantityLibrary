// بوابات الـ single-qubit
import XGate from './gates/single_qubit/XGate.js';
import YGate from './gates/single_qubit/YGate.js';
import ZGate from './gates/single_qubit/ZGate.js';
import HGate from './gates/single_qubit/HGate.js';
import SGate from './gates/single_qubit/SGate.js';
import TGate from './gates/single_qubit/TGate.js';
import IdentityGate from './gates/single_qubit/IdentityGate.js';
import RXGate from './gates/single_qubit/RXGate.js';
import RYGate from './gates/single_qubit/RYGate.js';
import RZGate from './gates/single_qubit/RZGate.js';
import PhasedXZGate from './gates/single_qubit/PhasedXZGate.js';
import UGate from './gates/single_qubit/UGate.js';

// بوابات الـ controlled
import CXGate from './gates/controlled_gates/CXGate.js';
import CYGate from './gates/controlled_gates/CYGate.js';
import CZGate from './gates/controlled_gates/CZGate.js';
import CCXGate from './gates/controlled_gates/CCXGate.js';
import CSWAPGate from './gates/controlled_gates/CSWAPGate.js';
import CPhaseGate from './gates/controlled_gates/CPhaseGate.js';
import CSPhaseGate from './gates/controlled_gates/CSPhaseGate.js';
import CCPhaseGate from './gates/controlled_gates/CCPhaseGate.js';
import CUGate from './gates/controlled_gates/CUGate.js';
import ControlledSwapGate from './gates/controlled_gates/ControlledSwapGate.js';
import ControlledRotationGate from './gates/controlled_gates/ControlledRotationGate.js';

// بوابات composite
import SWAPGate from './gates/composite_gates/SWAPGate.js';
import ISwapGate from './gates/composite_gates/ISwapGate.js';
import XXGate from './gates/composite_gates/XXGate.js';
import YYGate from './gates/composite_gates/YYGate.js';
import ZZGate from './gates/composite_gates/ZZGate.js';
import FSimGate from './gates/composite_gates/FSimGate.js';

// بوابات multi-qubit
import ToffoliGate from './gates/multi_qubit/ToffoliGate.js';
import FredkinGate from './gates/multi_qubit/FredkinGate.js';
import QFTGate from './gates/multi_qubit/QFTGate.js';
import QuantumFourierTransformGate from './gates/multi_qubit/QuantumFourierTransformGate.js';

// بوابات القياس
import MeasureGate from './gates/measurement_gates/MeasureGate.js';
import ResetGate from './gates/measurement_gates/ResetGate.js';
import BellStateMeasurementGate from './gates/measurement_gates/BellStateMeasurementGate.js';
import GHZMeasurementGate from './gates/measurement_gates/GHZMeasurementGate.js';

// بوابات noise
import DepolarizingGate from './gates/noise_gates/DepolarizingGate.js';
import AmplitudeDampingGate from './gates/noise_gates/AmplitudeDampingGate.js';
import PhaseDampingGate from './gates/noise_gates/PhaseDampingGate.js';
import ThermalRelaxationGate from './gates/noise_gates/ThermalRelaxationGate.js';

// بوابات non-clifford
import TGate from './gates/non_clifford_gates/TGate.js';
import SGate from './gates/non_clifford_gates/SGate.js';
import VGate from './gates/non_clifford_gates/VGate.js';
import FSimGate from './gates/non_clifford_gates/FSimGate.js';

// بوابات القياس القياسية
import XMeasurementGate from './gates/standard_measurement_gates/XMeasurementGate.js';
import YMeasurementGate from './gates/standard_measurement_gates/YMeasurementGate.js';
import ZMeasurementGate from './gates/standard_measurement_gates/ZMeasurementGate.js';

// بوابات خاصة
import QuantumErrorCorrectionGate from './gates/special_cases/QuantumErrorCorrectionGate.js';
import TopologicalGate from './gates/special_cases/TopologicalGate.js';
import NoisyQuantumGate from './gates/special_cases/NoisyQuantumGate.js';
import AdaptiveQuantumGate from './gates/special_cases/AdaptiveQuantumGate.js';
import BitFlipGate from './gates/special_cases/BitFlipGate.js';
import PhaseFlipGate from './gates/special_cases/PhaseFlipGate.js';

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
    // بوابات non-clifford
    TGate as NonCliffordTGate, SGate as NonCliffordSGate, VGate as NonCliffordVGate, FSimGate as NonCliffordFSimGate,
    // بوابات القياس القياسية
    XMeasurementGate, YMeasurementGate, ZMeasurementGate,
    // بوابات خاصة
    QuantumErrorCorrectionGate, TopologicalGate, NoisyQuantumGate, AdaptiveQuantumGate, BitFlipGate, PhaseFlipGate
};
