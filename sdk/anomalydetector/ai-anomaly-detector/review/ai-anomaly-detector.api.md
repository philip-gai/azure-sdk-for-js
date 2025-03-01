## API Report File for "@azure/ai-anomaly-detector"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="node" />

import * as coreHttp from '@azure/core-http';
import { KeyCredential } from '@azure/core-auth';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PipelineOptions } from '@azure/core-http';
import { TokenCredential } from '@azure/core-auth';

// @public
export type AlignMode = "Inner" | "Outer";

// @public (undocumented)
export interface AlignPolicy {
    alignMode?: AlignMode;
    fillNAMethod?: FillNAMethod;
    paddingValue?: number;
}

// @public (undocumented)
export interface AnomalyContributor {
    contributionScore?: number;
    variable?: string;
}

// @public (undocumented)
export class AnomalyDetector extends AnomalyDetectorContext {
    constructor(endpoint: string, options?: AnomalyDetectorOptionalParams);
    deleteMultivariateModel(modelId: string, options?: coreHttp.OperationOptions): Promise<coreHttp.RestResponse>;
    detectAnomaly(modelId: string, detectionRequest: DetectionRequest, options?: coreHttp.OperationOptions): Promise<AnomalyDetectorDetectAnomalyResponse>;
    detectChangePoint(body: DetectChangePointRequest, options?: coreHttp.OperationOptions): Promise<AnomalyDetectorDetectChangePointResponse>;
    detectEntireSeries(body: DetectRequest, options?: coreHttp.OperationOptions): Promise<AnomalyDetectorDetectEntireSeriesResponse>;
    detectLastPoint(body: DetectRequest, options?: coreHttp.OperationOptions): Promise<AnomalyDetectorDetectLastPointResponse>;
    exportModel(modelId: string, options?: coreHttp.OperationOptions): Promise<AnomalyDetectorExportModelResponse>;
    getDetectionResult(resultId: string, options?: coreHttp.OperationOptions): Promise<AnomalyDetectorGetDetectionResultResponse>;
    getMultivariateModel(modelId: string, options?: coreHttp.OperationOptions): Promise<AnomalyDetectorGetMultivariateModelResponse>;
    listMultivariateModel(options?: AnomalyDetectorListMultivariateModelOptionalParams): PagedAsyncIterableIterator<AnomalyDetectorClientModelSnapshot>;
    trainMultivariateModel(modelRequest: AnomalyDetectorClientModelInfo, options?: coreHttp.OperationOptions): Promise<AnomalyDetectorTrainMultivariateModelResponse>;
}

// @public
export class AnomalyDetectorClient extends AnomalyDetector {
    constructor(endpointUrl: string, credential: TokenCredential | KeyCredential, options?: PipelineOptions);
}

// @public (undocumented)
export interface AnomalyDetectorClientErrorResponse {
    code: string;
    message: string;
}

// @public
export interface AnomalyDetectorClientModel {
    createdTime: Date;
    lastUpdatedTime: Date;
    modelId: string;
    modelInfo?: AnomalyDetectorClientModelInfo;
}

// @public
export interface AnomalyDetectorClientModelInfo {
    alignPolicy?: AlignPolicy;
    readonly diagnosticsInfo?: DiagnosticsInfo;
    displayName?: string;
    endTime: Date;
    readonly errors?: AnomalyDetectorClientErrorResponse[];
    slidingWindow?: number;
    source: string;
    startTime: Date;
    readonly status?: AnomalyDetectorClientModelStatus;
}

// @public
export interface AnomalyDetectorClientModelList {
    currentCount: number;
    maxCount: number;
    models: AnomalyDetectorClientModelSnapshot[];
    nextLink?: string;
}

// @public (undocumented)
export interface AnomalyDetectorClientModelSnapshot {
    createdTime: Date;
    // (undocumented)
    displayName?: string;
    lastUpdatedTime: Date;
    modelId: string;
    readonly status: AnomalyDetectorClientModelStatus;
    variablesCount: number;
}

// @public (undocumented)
export interface AnomalyDetectorClientModelState {
    epochIds?: number[];
    // (undocumented)
    latenciesInSeconds?: number[];
    // (undocumented)
    trainLosses?: number[];
    // (undocumented)
    validationLosses?: number[];
}

// @public
export type AnomalyDetectorClientModelStatus = "CREATED" | "RUNNING" | "READY" | "FAILED";

// @public
export interface AnomalyDetectorClientOptions extends PipelineOptions {
}

// @public (undocumented)
export interface AnomalyDetectorClientVariableState {
    effectiveCount?: number;
    endTime?: Date;
    errors?: AnomalyDetectorClientErrorResponse[];
    filledNARatio?: number;
    startTime?: Date;
    variable?: string;
}

// @public (undocumented)
export class AnomalyDetectorContext extends coreHttp.ServiceClient {
    constructor(endpoint: string, options?: AnomalyDetectorOptionalParams);
    // (undocumented)
    endpoint: string;
}

// @public
export interface AnomalyDetectorDetectAnomalyHeaders {
    location?: string;
}

// @public
export type AnomalyDetectorDetectAnomalyResponse = AnomalyDetectorDetectAnomalyHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: AnomalyDetectorDetectAnomalyHeaders;
    };
};

// @public
export type AnomalyDetectorDetectChangePointResponse = DetectChangePointResponse & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: DetectChangePointResponse;
    };
};

// @public
export type AnomalyDetectorDetectEntireSeriesResponse = DetectEntireResponse & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: DetectEntireResponse;
    };
};

// @public
export type AnomalyDetectorDetectLastPointResponse = DetectLastPointResponse & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: DetectLastPointResponse;
    };
};

// @public
export interface AnomalyDetectorExportModelHeaders {
    contentType?: string;
}

// @public
export type AnomalyDetectorExportModelResponse = AnomalyDetectorExportModelHeaders & {
    blobBody?: Promise<Blob>;
    readableStreamBody?: NodeJS.ReadableStream;
    _response: coreHttp.HttpResponse & {
        parsedHeaders: AnomalyDetectorExportModelHeaders;
    };
};

// @public
export type AnomalyDetectorGetDetectionResultResponse = DetectionResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: DetectionResult;
    };
};

// @public
export type AnomalyDetectorGetMultivariateModelResponse = AnomalyDetectorClientModel & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: AnomalyDetectorClientModel;
    };
};

// @public
export interface AnomalyDetectorListMultivariateModelNextOptionalParams extends coreHttp.OperationOptions {
    skip?: number;
    top?: number;
}

// @public
export type AnomalyDetectorListMultivariateModelNextResponse = AnomalyDetectorClientModelList & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: AnomalyDetectorClientModelList;
    };
};

// @public
export interface AnomalyDetectorListMultivariateModelOptionalParams extends coreHttp.OperationOptions {
    skip?: number;
    top?: number;
}

// @public
export type AnomalyDetectorListMultivariateModelResponse = AnomalyDetectorClientModelList & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: AnomalyDetectorClientModelList;
    };
};

// @public
export interface AnomalyDetectorOptionalParams extends coreHttp.ServiceClientOptions {
    endpoint?: string;
}

// @public
export interface AnomalyDetectorTrainMultivariateModelHeaders {
    location?: string;
}

// @public
export type AnomalyDetectorTrainMultivariateModelResponse = AnomalyDetectorTrainMultivariateModelHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: AnomalyDetectorTrainMultivariateModelHeaders;
    };
};

// @public (undocumented)
export interface AnomalyState {
    errors?: AnomalyDetectorClientErrorResponse[];
    timestamp: Date;
    // (undocumented)
    value?: AnomalyValue;
}

// @public (undocumented)
export interface AnomalyValue {
    contributors?: AnomalyContributor[];
    isAnomaly: boolean;
    score?: number;
    severity: number;
}

// @public (undocumented)
export interface DetectChangePointRequest {
    customInterval?: number;
    granularity: TimeGranularity;
    period?: number;
    series: TimeSeriesPoint[];
    stableTrendWindow?: number;
    threshold?: number;
}

// @public (undocumented)
export interface DetectChangePointResponse {
    confidenceScores?: number[];
    isChangePoint?: boolean[];
    readonly period?: number;
}

// @public (undocumented)
export interface DetectEntireResponse {
    expectedValues: number[];
    isAnomaly: boolean[];
    isNegativeAnomaly: boolean[];
    isPositiveAnomaly: boolean[];
    lowerMargins: number[];
    period: number;
    upperMargins: number[];
}

// @public
export interface DetectionRequest {
    endTime: Date;
    source: string;
    startTime: Date;
}

// @public
export interface DetectionResult {
    // (undocumented)
    resultId: string;
    results: AnomalyState[];
    summary: DetectionResultSummary;
}

// @public (undocumented)
export interface DetectionResultSummary {
    errors?: AnomalyDetectorClientErrorResponse[];
    setupInfo: DetectionRequest;
    status: DetectionStatus;
    // (undocumented)
    variableStates?: AnomalyDetectorClientVariableState[];
}

// @public
export type DetectionStatus = "CREATED" | "RUNNING" | "READY" | "FAILED";

// @public (undocumented)
export interface DetectLastPointResponse {
    expectedValue: number;
    isAnomaly: boolean;
    isNegativeAnomaly: boolean;
    isPositiveAnomaly: boolean;
    lowerMargin: number;
    period: number;
    suggestedWindow: number;
    upperMargin: number;
}

// @public (undocumented)
export interface DetectRequest {
    customInterval?: number;
    granularity?: TimeGranularity;
    maxAnomalyRatio?: number;
    period?: number;
    sensitivity?: number;
    series: TimeSeriesPoint[];
}

// @public (undocumented)
export interface DiagnosticsInfo {
    // (undocumented)
    modelState?: AnomalyDetectorClientModelState;
    // (undocumented)
    variableStates?: AnomalyDetectorClientVariableState[];
}

// @public
export type FillNAMethod = "Previous" | "Subsequent" | "Linear" | "Zero" | "Pad" | "NotFill";

// @public (undocumented)
export enum KnownTimeGranularity {
    daily = "daily",
    hourly = "hourly",
    monthly = "monthly",
    none = "none",
    perMicrosecond = "microsecond",
    perMinute = "minutely",
    perSecond = "secondly",
    weekly = "weekly",
    yearly = "yearly"
}

// @public
export type TimeGranularity = "yearly" | "monthly" | "weekly" | "daily" | "hourly" | "minutely" | "secondly" | "microsecond" | "none";

// @public (undocumented)
export interface TimeSeriesPoint {
    timestamp?: Date;
    value: number;
}

// (No @packageDocumentation comment for this package)

```
