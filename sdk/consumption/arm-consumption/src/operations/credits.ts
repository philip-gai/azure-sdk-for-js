/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Credits } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClientContext } from "../consumptionManagementClientContext";
import { CreditsGetOptionalParams, CreditsGetResponse } from "../models";

/** Class containing Credits operations. */
export class CreditsImpl implements Credits {
  private readonly client: ConsumptionManagementClientContext;

  /**
   * Initialize a new instance of the class Credits class.
   * @param client Reference to the service client
   */
  constructor(client: ConsumptionManagementClientContext) {
    this.client = client;
  }

  /**
   * The credit summary by billingAccountId and billingProfileId.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param options The options parameters.
   */
  get(
    billingAccountId: string,
    billingProfileId: string,
    options?: CreditsGetOptionalParams
  ): Promise<CreditsGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountId, billingProfileId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/credits/balanceSummary",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CreditSummary
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountId,
    Parameters.billingProfileId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
