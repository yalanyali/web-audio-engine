export default BaseAudioContext;
declare class BaseAudioContext extends EventTarget {
    constructor(opts: any);
    get destination(): any;
    get sampleRate(): any;
    get currentTime(): any;
    get listener(): any;
    get state(): any;
    resume(): any;
    close(): any;
    set onstatechange(arg: any);
    get onstatechange(): any;
    createBuffer(numberOfChannels: any, length: any, sampleRate: any): AudioBuffer;
    decodeAudioData(audioData: any, successCallback?: any, errorCallback?: any): Promise<any>;
    createBufferSource(): AudioBufferSourceNode;
    createConstantSource(): ConstantSourceNode;
    createScriptProcessor(bufferSize: any, numberOfInputChannels: any, numberOfOutputChannels: any): ScriptProcessorNode;
    createAnalyser(): AnalyserNode;
    createGain(): GainNode;
    createDelay(maxDelayTime: any): DelayNode;
    createBiquadFilter(): BiquadFilterNode;
    createIIRFilter(feedforward: any, feedback: any): IIRFilterNode;
    createWaveShaper(): WaveShaperNode;
    createPanner(): PannerNode;
    createSpatialPanner(): SpatialPannerNode;
    createStereoPanner(): StereoPannerNode;
    createConvolver(): ConvolverNode;
    createChannelSplitter(numberOfOutputs: any): ChannelSplitterNode;
    createChannelMerger(numberOfInputs: any): ChannelMergerNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createOscillator(): OscillatorNode;
    createPeriodicWave(real: any, imag: any, constraints: any): PeriodicWave;
}
import EventTarget from "./EventTarget";
import AudioBuffer from "./AudioBuffer";
import AudioBufferSourceNode from "./AudioBufferSourceNode";
import ConstantSourceNode from "./ConstantSourceNode";
import ScriptProcessorNode from "./ScriptProcessorNode";
import AnalyserNode from "./AnalyserNode";
import GainNode from "./GainNode";
import DelayNode from "./DelayNode";
import BiquadFilterNode from "./BiquadFilterNode";
import IIRFilterNode from "./IIRFilterNode";
import WaveShaperNode from "./WaveShaperNode";
import PannerNode from "./PannerNode";
import SpatialPannerNode from "./SpatialPannerNode";
import StereoPannerNode from "./StereoPannerNode";
import ConvolverNode from "./ConvolverNode";
import ChannelSplitterNode from "./ChannelSplitterNode";
import ChannelMergerNode from "./ChannelMergerNode";
import DynamicsCompressorNode from "./DynamicsCompressorNode";
import OscillatorNode from "./OscillatorNode";
import PeriodicWave from "./PeriodicWave";