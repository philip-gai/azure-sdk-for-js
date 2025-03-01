/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { ApiVersion73Preview, KeyVaultClientOptionalParams } from "./models";

const packageName = "@azure/keyvault-secrets";
export const packageVersion = "4.4.0-beta.2";

/** @hidden */
export class KeyVaultClientContext extends coreHttp.ServiceClient {
  apiVersion: ApiVersion73Preview;

  /**
   * Initializes a new instance of the KeyVaultClientContext class.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    apiVersion: ApiVersion73Preview,
    options?: KeyVaultClientOptionalParams
  ) {
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{vaultBaseUrl}";

    // Parameter assignments
    this.apiVersion = apiVersion;
  }
}
