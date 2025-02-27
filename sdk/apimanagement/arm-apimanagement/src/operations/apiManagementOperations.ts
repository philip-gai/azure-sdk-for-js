/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApiManagementOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";
import {
  Operation,
  ApiManagementOperationsListNextOptionalParams,
  ApiManagementOperationsListOptionalParams,
  ApiManagementOperationsListResponse,
  ApiManagementOperationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiManagementOperations operations. */
export class ApiManagementOperationsImpl implements ApiManagementOperations {
  private readonly client: ApiManagementClientContext;

  /**
   * Initialize a new instance of the class ApiManagementOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the available REST API operations of the Microsoft.ApiManagement provider.
   * @param options The options parameters.
   */
  public list(
    options?: ApiManagementOperationsListOptionalParams
  ): PagedAsyncIterableIterator<Operation> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ApiManagementOperationsListOptionalParams
  ): AsyncIterableIterator<Operation[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ApiManagementOperationsListOptionalParams
  ): AsyncIterableIterator<Operation> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the available REST API operations of the Microsoft.ApiManagement provider.
   * @param options The options parameters.
   */
  private _list(
    options?: ApiManagementOperationsListOptionalParams
  ): Promise<ApiManagementOperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ApiManagementOperationsListNextOptionalParams
  ): Promise<ApiManagementOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.ApiManagement/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
