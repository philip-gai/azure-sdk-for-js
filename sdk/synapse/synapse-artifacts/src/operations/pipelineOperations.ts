/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PipelineOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClientContext } from "../artifactsClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PipelineResource,
  PipelineGetPipelinesByWorkspaceNextOptionalParams,
  PipelineGetPipelinesByWorkspaceOptionalParams,
  PipelineGetPipelinesByWorkspaceResponse,
  PipelineCreateOrUpdatePipelineOptionalParams,
  PipelineCreateOrUpdatePipelineResponse,
  PipelineGetPipelineOptionalParams,
  PipelineGetPipelineResponse,
  PipelineDeletePipelineOptionalParams,
  ArtifactRenameRequest,
  PipelineRenamePipelineOptionalParams,
  PipelineCreatePipelineRunOptionalParams,
  PipelineCreatePipelineRunResponse,
  PipelineGetPipelinesByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PipelineOperations operations. */
export class PipelineOperationsImpl implements PipelineOperations {
  private readonly client: ArtifactsClientContext;

  /**
   * Initialize a new instance of the class PipelineOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClientContext) {
    this.client = client;
  }

  /**
   * Lists pipelines.
   * @param options The options parameters.
   */
  public listPipelinesByWorkspace(
    options?: PipelineGetPipelinesByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<PipelineResource> {
    const iter = this.getPipelinesByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getPipelinesByWorkspacePagingPage(options);
      }
    };
  }

  private async *getPipelinesByWorkspacePagingPage(
    options?: PipelineGetPipelinesByWorkspaceOptionalParams
  ): AsyncIterableIterator<PipelineResource[]> {
    let result = await this._getPipelinesByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getPipelinesByWorkspaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getPipelinesByWorkspacePagingAll(
    options?: PipelineGetPipelinesByWorkspaceOptionalParams
  ): AsyncIterableIterator<PipelineResource> {
    for await (const page of this.getPipelinesByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists pipelines.
   * @param options The options parameters.
   */
  private async _getPipelinesByWorkspace(
    options?: PipelineGetPipelinesByWorkspaceOptionalParams
  ): Promise<PipelineGetPipelinesByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getPipelinesByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getPipelinesByWorkspaceOperationSpec
      );
      return result as PipelineGetPipelinesByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a pipeline.
   * @param pipelineName The pipeline name.
   * @param pipeline Pipeline resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdatePipeline(
    pipelineName: string,
    pipeline: PipelineResource,
    options?: PipelineCreateOrUpdatePipelineOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PipelineCreateOrUpdatePipelineResponse>,
      PipelineCreateOrUpdatePipelineResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginCreateOrUpdatePipeline",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PipelineCreateOrUpdatePipelineResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as PipelineCreateOrUpdatePipelineResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { pipelineName, pipeline, options },
      createOrUpdatePipelineOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates a pipeline.
   * @param pipelineName The pipeline name.
   * @param pipeline Pipeline resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdatePipelineAndWait(
    pipelineName: string,
    pipeline: PipelineResource,
    options?: PipelineCreateOrUpdatePipelineOptionalParams
  ): Promise<PipelineCreateOrUpdatePipelineResponse> {
    const poller = await this.beginCreateOrUpdatePipeline(
      pipelineName,
      pipeline,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a pipeline.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  async getPipeline(
    pipelineName: string,
    options?: PipelineGetPipelineOptionalParams
  ): Promise<PipelineGetPipelineResponse> {
    const { span } = createSpan("ArtifactsClient-getPipeline", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { pipelineName, options },
        getPipelineOperationSpec
      );
      return result as PipelineGetPipelineResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a pipeline.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  async beginDeletePipeline(
    pipelineName: string,
    options?: PipelineDeletePipelineOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginDeletePipeline",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { pipelineName, options },
      deletePipelineOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a pipeline.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  async beginDeletePipelineAndWait(
    pipelineName: string,
    options?: PipelineDeletePipelineOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeletePipeline(pipelineName, options);
    return poller.pollUntilDone();
  }

  /**
   * Renames a pipeline.
   * @param pipelineName The pipeline name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenamePipeline(
    pipelineName: string,
    request: ArtifactRenameRequest,
    options?: PipelineRenamePipelineOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginRenamePipeline",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { pipelineName, request, options },
      renamePipelineOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Renames a pipeline.
   * @param pipelineName The pipeline name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenamePipelineAndWait(
    pipelineName: string,
    request: ArtifactRenameRequest,
    options?: PipelineRenamePipelineOptionalParams
  ): Promise<void> {
    const poller = await this.beginRenamePipeline(
      pipelineName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates a run of a pipeline.
   * @param pipelineName The pipeline name.
   * @param options The options parameters.
   */
  async createPipelineRun(
    pipelineName: string,
    options?: PipelineCreatePipelineRunOptionalParams
  ): Promise<PipelineCreatePipelineRunResponse> {
    const { span } = createSpan(
      "ArtifactsClient-createPipelineRun",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { pipelineName, options },
        createPipelineRunOperationSpec
      );
      return result as PipelineCreatePipelineRunResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetPipelinesByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the GetPipelinesByWorkspace
   *                 method.
   * @param options The options parameters.
   */
  private async _getPipelinesByWorkspaceNext(
    nextLink: string,
    options?: PipelineGetPipelinesByWorkspaceNextOptionalParams
  ): Promise<PipelineGetPipelinesByWorkspaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getPipelinesByWorkspaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        getPipelinesByWorkspaceNextOperationSpec
      );
      return result as PipelineGetPipelinesByWorkspaceNextResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getPipelinesByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/pipelines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineListResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdatePipelineOperationSpec: coreClient.OperationSpec = {
  path: "/pipelines/{pipelineName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineResource
    },
    201: {
      bodyMapper: Mappers.PipelineResource
    },
    202: {
      bodyMapper: Mappers.PipelineResource
    },
    204: {
      bodyMapper: Mappers.PipelineResource
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.pipeline,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.pipelineName],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getPipelineOperationSpec: coreClient.OperationSpec = {
  path: "/pipelines/{pipelineName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.pipelineName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deletePipelineOperationSpec: coreClient.OperationSpec = {
  path: "/pipelines/{pipelineName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.pipelineName],
  headerParameters: [Parameters.accept],
  serializer
};
const renamePipelineOperationSpec: coreClient.OperationSpec = {
  path: "/pipelines/{pipelineName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.pipelineName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createPipelineRunOperationSpec: coreClient.OperationSpec = {
  path: "/pipelines/{pipelineName}/createRun",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.CreateRunResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.referencePipelineRunId,
    Parameters.isRecovery,
    Parameters.startActivityName
  ],
  urlParameters: [Parameters.endpoint, Parameters.pipelineName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getPipelinesByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineListResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
