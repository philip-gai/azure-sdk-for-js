// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { IncomingMessage, RequestOptions } from "http";
import https from "https";
import http from "http";

/**
 * Returns the environment variable, throws an error if not defined.
 *
 * @export
 * @param {string} name
 */
export function getEnvVar(name: string): string {
  const val = process.env[name];
  if (!val) {
    throw `Environment variable ${name} is not defined.`;
  }
  return val;
}

let cachedHttpsAgent: https.Agent;
/**
 * Returns https Agent to allow connecting to the proxy tool with "https" protocol.
 *
 * @export
 * @param {string} name
 */
export const getCachedHttpsAgent = (insecure: boolean): https.Agent => {
  if (!cachedHttpsAgent) {
    cachedHttpsAgent = new https.Agent({
      rejectUnauthorized: !insecure
      // TODO: Doesn't work currently
      // pfx: require("fs").readFileSync(
      //   "/workspaces/azure-sdk-for-js/eng/common/testproxy/dotnet-devcert.pfx"
      // ),
      // passphrase: "password"}
    });
  }
  return cachedHttpsAgent;
};

/**
 * Reads a readable stream. Doesn't save to a buffer.
 *
 * @export
 * @param {NodeJS.ReadableStream} stream A Node.js Readable stream
 */
export async function drainStream(stream: NodeJS.ReadableStream): Promise<void> {
  return new Promise((resolve, reject) => {
    stream.on("data", () => {
      // do nothing
    });
    stream.on("end", resolve);
    stream.on("error", reject);
  });
}
export async function makeRequest(
  uri: string,
  requestOptions: RequestOptions,
  insecure: boolean
): Promise<IncomingMessage> {
  return new Promise<IncomingMessage>((resolve, reject) => {
    let req: http.ClientRequest;
    if (uri.startsWith("https")) {
      req = https.request(
        uri,
        {
          ...requestOptions,
          agent: getCachedHttpsAgent(insecure)
        },
        resolve
      );
    } else {
      req = http.request(uri, requestOptions, resolve);
    }
    req.once("error", reject);

    req.end();
  });
}

/**
 * Helper TypeGuard that checks if something is defined or not.
 * @param thing - Anything
 * @internal
 */
export function isDefined<T>(thing: T | undefined | null): thing is T {
  return typeof thing !== "undefined" && thing !== null;
}

/**
 * Formats a duration/time span (e.g. elapsed time) into mm:ss format.
 *
 * @param durationMilliseconds Duration in milliseconds
 */
export function formatDuration(durationMilliseconds: number): string {
  const totalSeconds = Math.floor(durationMilliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
