// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { QueryCollectionFormat } from "./queryCollectionFormat";
import { Mapper } from "./serializer";

/**
 * A path which describes how to access a particular property in a given object data source. May be a single property name, an array that denotes nested property names, or a set of multiple named properties with paths in the case of complex object values.
 */
export type ParameterPath = string | string[] | { [propertyName: string]: ParameterPath };

/**
 * A common interface that all Operation parameter's extend.
 */
export interface OperationParameter {
  /**
   * The path to this parameter's value in OperationArguments or the object that contains paths for
   * each property's value in OperationArguments.
   */
  parameterPath: ParameterPath;

  /**
   * The mapper that defines how to validate and serialize this parameter's value.
   */
  mapper: Mapper;
}

/**
 * A parameter for an operation that will be substituted into the operation's request URL.
 */
export interface OperationURLParameter extends OperationParameter {
  /**
   * Whether or not to skip encoding the URL parameter's value before adding it to the URL.
   */
  skipEncoding?: boolean;
}

/**
 * A parameter for an operation that will be added as a query parameter to the operation's HTTP
 * request.
 */
export interface OperationQueryParameter extends OperationParameter {
  /**
   * Whether or not to skip encoding the query parameter's value before adding it to the URL.
   */
  skipEncoding?: boolean;

  /**
   * If this query parameter's value is a collection, what type of format should the value be
   * converted to.
   */
  collectionFormat?: QueryCollectionFormat;
}

/**
 * Get the path to this parameter's value as a dotted string (a.b.c).
 * @param parameter - The parameter to get the path string for.
 * @returns The path to this parameter's value as a dotted string.
 */
export function getPathStringFromParameter(parameter: OperationParameter): string {
  return getPathStringFromParameterPath(parameter.parameterPath, parameter.mapper);
}

export function getPathStringFromParameterPath(
  parameterPath: ParameterPath,
  mapper: Mapper
): string {
  let result: string;
  if (typeof parameterPath === "string") {
    result = parameterPath;
  } else if (Array.isArray(parameterPath)) {
    result = parameterPath.join(".");
  } else {
    result = mapper.serializedName!;
  }
  return result;
}
