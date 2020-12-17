export default DynamicsCompressorKernel;
declare class DynamicsCompressorKernel {
    constructor(sampleRate: any, numberOfChannels: any);
    sampleRate: any;
    lastPreDelayFrames: any;
    preDelayReadIndex: any;
    preDelayWriteIndex: any;
    ratio: any;
    slope: number | undefined;
    linearThreshold: number | undefined;
    dbThreshold: any;
    dbKnee: any;
    kneeThreshold: number | undefined;
    kneeThresholdDb: any;
    ykneeThresholdDb: number | undefined;
    K: number | undefined;
    preDelayBuffers: any[];
    meteringReleaseK: number;
    setNumberOfChannels(numberOfChannels: any): void;
    setPreDelayTime(preDelayTime: any): void;
    kneeCurve(x: any, k: any): any;
    saturate(x: any, k: any): any;
    slopeAt(x: any, k: any): number;
    kAtSlope(desiredSlope: any): number;
    updateStaticCurveParameters(dbThreshold: any, dbKnee: any, ratio: any): number | undefined;
    process(sourceChannels: any, destinationChannels: any, numberOfChannels: any, framesToProcess: any, dbThreshold: any, dbKnee: any, ratio: any, attackTime: any, releaseTime: any, preDelayTime: any, dbPostGain: any, effectBlend: any, releaseZone1: any, releaseZone2: any, releaseZone3: any, releaseZone4: any): void;
    detectorAverage: any;
    maxAttackCompressionDiffDb: number | undefined;
    meteringGain: number | undefined;
    compressorGain: any;
    reset(): void;
}