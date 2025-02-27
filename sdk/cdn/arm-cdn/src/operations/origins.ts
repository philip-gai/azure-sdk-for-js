/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Origins } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClientContext } from "../cdnManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Origin,
  OriginsListByEndpointNextOptionalParams,
  OriginsListByEndpointOptionalParams,
  OriginsListByEndpointResponse,
  OriginsGetOptionalParams,
  OriginsGetResponse,
  OriginsCreateOptionalParams,
  OriginsCreateResponse,
  OriginUpdateParameters,
  OriginsUpdateOptionalParams,
  OriginsUpdateResponse,
  OriginsDeleteOptionalParams,
  OriginsListByEndpointNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Origins operations. */
export class OriginsImpl implements Origins {
  private readonly client: CdnManagementClientContext;

  /**
   * Initialize a new instance of the class Origins class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the existing origins within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  public listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginsListByEndpointOptionalParams
  ): PagedAsyncIterableIterator<Origin> {
    const iter = this.listByEndpointPagingAll(
      resourceGroupName,
      profileName,
      endpointName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByEndpointPagingPage(
          resourceGroupName,
          profileName,
          endpointName,
          options
        );
      }
    };
  }

  private async *listByEndpointPagingPage(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginsListByEndpointOptionalParams
  ): AsyncIterableIterator<Origin[]> {
    let result = await this._listByEndpoint(
      resourceGroupName,
      profileName,
      endpointName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByEndpointNext(
        resourceGroupName,
        profileName,
        endpointName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByEndpointPagingAll(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginsListByEndpointOptionalParams
  ): AsyncIterableIterator<Origin> {
    for await (const page of this.listByEndpointPagingPage(
      resourceGroupName,
      profileName,
      endpointName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the existing origins within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  private _listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginsListByEndpointOptionalParams
  ): Promise<OriginsListByEndpointResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, options },
      listByEndpointOperationSpec
    );
  }

  /**
   * Gets an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    options?: OriginsGetOptionalParams
  ): Promise<OriginsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, originName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new origin within the specified endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin that is unique within the endpoint.
   * @param origin Origin properties
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    origin: Origin,
    options?: OriginsCreateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<OriginsCreateResponse>, OriginsCreateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<OriginsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
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
      {
        resourceGroupName,
        profileName,
        endpointName,
        originName,
        origin,
        options
      },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates a new origin within the specified endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin that is unique within the endpoint.
   * @param origin Origin properties
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    origin: Origin,
    options?: OriginsCreateOptionalParams
  ): Promise<OriginsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      endpointName,
      originName,
      origin,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param originUpdateProperties Origin properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    originUpdateProperties: OriginUpdateParameters,
    options?: OriginsUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<OriginsUpdateResponse>, OriginsUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<OriginsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
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
      {
        resourceGroupName,
        profileName,
        endpointName,
        originName,
        originUpdateProperties,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Updates an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param originUpdateProperties Origin properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    originUpdateProperties: OriginUpdateParameters,
    options?: OriginsUpdateOptionalParams
  ): Promise<OriginsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      endpointName,
      originName,
      originUpdateProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    options?: OriginsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
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
      { resourceGroupName, profileName, endpointName, originName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes an existing origin within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originName Name of the origin which is unique within the endpoint.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originName: string,
    options?: OriginsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      endpointName,
      originName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByEndpointNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param nextLink The nextLink from the previous successful call to the ListByEndpoint method.
   * @param options The options parameters.
   */
  private _listByEndpointNext(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    nextLink: string,
    options?: OriginsListByEndpointNextOptionalParams
  ): Promise<OriginsListByEndpointNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, nextLink, options },
      listByEndpointNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByEndpointOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OriginListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Origin
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.originName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Origin
    },
    201: {
      bodyMapper: Mappers.Origin
    },
    202: {
      bodyMapper: Mappers.Origin
    },
    204: {
      bodyMapper: Mappers.Origin
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.origin,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.originName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Origin
    },
    201: {
      bodyMapper: Mappers.Origin
    },
    202: {
      bodyMapper: Mappers.Origin
    },
    204: {
      bodyMapper: Mappers.Origin
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.originUpdateProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.originName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.originName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByEndpointNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OriginListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
