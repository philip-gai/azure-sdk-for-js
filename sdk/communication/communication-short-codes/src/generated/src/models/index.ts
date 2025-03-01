/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** A wrapper for a list of short code entities. */
export interface ShortCodes {
  /** List of short codes. */
  shortCodes?: ShortCode[];
  /** Represents the URL link to the next page. */
  nextLink?: string;
}

/** Represents a number, ShortCode or AlphaId, acquired in a given country. */
export interface ShortCode {
  /** The value of the ShortCode or the alpha numeric e.g. '555555', 'CONTOSO', etc. */
  number?: string;
  /** The type of number e.g. 'ShortCode', 'AlphaId'. */
  numberType?: NumberType;
  /** ISO 3166 2-char code representing the country e.g. 'US'. */
  countryCode?: string;
  /** Program Brief Name. */
  programBriefIds?: string[];
  /** Date in which number was purchased. */
  purchaseDate?: Date;
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

/**
 * Represents a US Program Brief for acquiring a short code in the United States.
 * A Program Brief provides vital information to the carriers about a messaging program or campaign that would be associated with a short code or alpha sender number.
 * A Program Brief also provides specifics about the use case, the purpose and the consumer experience receiving the message.
 */
export interface USProgramBrief {
  /** Program Brief Id. */
  id: string;
  /** Program Brief status e.g. 'submitted', 'approved', etc */
  status?: ProgramBriefStatus;
  /** Number provisioned for the Program Brief e.g. 555555, 'CONTOSO' */
  number?: string;
  /**
   * Notes added to the Program Brief after being reviewed to help customer understand
   * review results and necessary follow up actions.
   */
  reviewNotes?: ReviewNote[];
  /** Represents the costs tied to the number. */
  costs?: ShortCodeCost[];
  /** Date and time when the Program Brief was submitted. */
  submissionDate?: Date;
  /** Last date and time when the Program Brief status was updated. */
  statusUpdatedDate?: Date;
  programDetails?: ProgramDetails;
  companyInformation?: CompanyInformation;
  messageDetails?: MessageDetails;
  trafficDetails?: TrafficDetails;
}

/** Holds a note about a Program Brief that has gone thru stages of review process. */
export interface ReviewNote {
  /** Note related to a Program Brief that may imply changes needed from the client. */
  message?: string;
  /** Date and time when the note was added to the Program Brief. */
  date?: Date;
}

/** The incurred cost for a single short code. */
export interface ShortCodeCost {
  /** The cost amount. */
  amount: number;
  /** The ISO 4217 currency code for the cost amount, e.g. USD. */
  currencyCode: string;
  /** The frequency with which the cost gets billed. */
  billingFrequency: BillingFrequency;
}

export interface ProgramDetails {
  /** Set to true if the request is for a vanity number. */
  isVanity?: boolean;
  /**
   * Priority ordered list of preferred vanity numbers.
   * Vanity numbers should be 5 or 6 digit when number type is ShortCode.
   * e.g. 555555, 222222.
   */
  preferredVanityNumbers?: string[];
  /** Type for desired numbers e.g. 'shortCode' or 'alphaId'. */
  numberType?: NumberType;
  /** Indicates whether the number will be used for political campaigns or not. */
  isPoliticalCampaign?: boolean;
  /**
   * A program name that indicates the purpose of filling the Program Brief and how the number will be used for messaging.
   * e.g. 'CONTOSO Shipping'
   */
  name?: string;
  /** Describes how and why the number will be used for messaging as part of the program. */
  description?: string;
  /** URL for the program or company. */
  url?: string;
  /** Indicates how the consumer can sign up to the program e.g. 'website', 'pointOfSale' and/or 'sms'. */
  signUpTypes?: ProgramSignUpType[];
  /** URL for "call to action" image for the program. */
  signUpUrl?: string;
  /** URL for program terms of service. */
  termsOfServiceUrl?: string;
  /** URL for privacy policy. */
  privacyPolicyUrl?: string;
  /**
   * Date in which SMS messages will start to be sent out.
   * Should follow ISO 8601 internet format for datetimes.
   * e.g. 2021-08-17T22:02:51.316Z, 2021-08-17T16:39:57-08:00, etc.
   */
  expectedDateOfService?: Date;
}

export interface CompanyInformation {
  /** Legal entity name for customer submitting Program Brief. */
  name?: string;
  /** Company URL for customer submitting Program Brief. */
  url?: string;
  /** Company's address for the customer submitting the Program Brief. */
  address?: string;
  /** Contact Information */
  contactInformation?: ContactInformation;
  /** Customer Care Information */
  customerCareInformation?: CustomerCareInformation;
}

/** Contact Information */
export interface ContactInformation {
  /** Name of authorized user for purposes of submitting the Program Brief. */
  name?: string;
  /** Contact phone number for the authorized user for the customer. Use E164 format. e.g. +14086111111. */
  phone?: string;
  /** Contact email address number for the authorized user for the customer. */
  email?: string;
}

/** Customer Care Information */
export interface CustomerCareInformation {
  /** Customer support phone number for the customer submitting the Program Brief. Use E164 format. e.g. +18005551212 */
  tollFreeNumber?: string;
  /** Customer support email address for the customer submitting the Program Brief. */
  email?: string;
}

export interface MessageDetails {
  /** Applicable message protocols used in the program e.g. SMS, MMS. */
  supportedProtocols?: MessageProtocol[];
  /** Indicates the nature of the messaging associated with the program e.g. 'subscription', 'transaction'. */
  recurrence?: Recurrence;
  /**
   * Message text for mobile terminated message associated with HELP keyword
   * e.g 'This is the HELP message test.'.
   */
  helpMessage?: string;
  /**
   * "Message text for mobile terminated message associated with STOP keyword
   * e.g. 'This is the STOP message test.'.
   */
  optOutMessage?: string;
  optInMessage?: string;
  /** Keyword used to confirm double Opt-In method e.g. 'JOIN'. */
  optInReply?: string;
  confirmationMessage?: string;
  /** Describes directionality e.g. oneWay or twoWay */
  directionality?: MessageDirectionality;
  /** Provides message exchange examples from and to end user for each supported message content type. */
  useCases?: UseCase[];
}

/** Describes a messaging use case for a given content type by providing example messages. */
export interface UseCase {
  /** Indicates the messaging content category used in the program e.g. 'ringTones', 'smsChat', 'video', 'loyaltyProgramPointsPrizes', 'gifting', 'inApplicationBilling', 'textToScreen'. */
  contentCategory?: MessageContentCategory;
  /** Example messages to be sent to and from the end user for the indicated content type. */
  examples?: MessageExampleSequence[];
}

/** A sequence of example messages to and from the end user. */
export interface MessageExampleSequence {
  /** Example messages to be sent to and from the end user. */
  messages?: MessageExample[];
}

/** Represents a message example to be sent from or to the end user. */
export interface MessageExample {
  /** Indicates whether the message example is supposed to be sent to or from the end user e.g. toUser */
  direction?: MessageDirection;
  /** Actual example text for the message e.g. 'Want me to notify you when package in the way?' */
  text?: string;
}

export interface TrafficDetails {
  /** Estimated total messages per month. */
  totalMonthlyVolume?: number;
  /** Estimated number of Mobile-Originated messages likely to be received from a user per month. */
  monthlyAverageMessagesFromUser?: number;
  /** Estimated number of Mobile-Terminated messages likely to be sent per user per month. */
  monthlyAverageMessagesToUser?: number;
  /** Indicates if the nature of the messaging traffic will be bursty. */
  isSpiky?: boolean;
  /**
   * If isSpiky=true, then explain additional details about the traffic pattern
   * e.g. 'Higher traffic expected during holiday season and Black Friday.'.
   */
  spikeDetails?: string;
  /** Numbers of days in which is expected to start sending messages from the short code. */
  estimatedRampUpTimeInDays?: number;
}

/** A wrapper for a list of USProgramBrief entities. */
export interface USProgramBriefs {
  /** List of Program Briefs. */
  programBriefs?: USProgramBrief[];
  /** Represents the URL link to the next page. */
  nextLink?: string;
}

/** Defines values for NumberType. */
export type NumberType = "shortCode" | "alphaId";
/** Defines values for ProgramBriefStatus. */
export type ProgramBriefStatus =
  | "submitted"
  | "approved"
  | "submitNewVanityNumbers"
  | "updateProgramBrief"
  | "draft"
  | "denied";
/** Defines values for BillingFrequency. */
export type BillingFrequency = "monthly" | "once";
/** Defines values for ProgramSignUpType. */
export type ProgramSignUpType =
  | "website"
  | "pointOfSale"
  | "sms"
  | "interactiveVoiceResponse";
/** Defines values for MessageProtocol. */
export type MessageProtocol = "sms" | "mms";
/** Defines values for Recurrence. */
export type Recurrence = "subscription" | "transaction";
/** Defines values for MessageDirectionality. */
export type MessageDirectionality = "oneWay" | "twoWay";
/** Defines values for MessageContentCategory. */
export type MessageContentCategory =
  | "ringTones"
  | "smsChat"
  | "video"
  | "loyaltyProgramPointsPrizes"
  | "gifting"
  | "inApplicationBilling"
  | "textToScreen"
  | "games"
  | "audioChat"
  | "mmsPictures"
  | "sweepstakesContestAuction"
  | "financialBanking"
  | "premiumWap"
  | "queryService"
  | "wallpaperScreensaver"
  | "voting"
  | "application"
  | "mobileGivingDonations"
  | "coupons"
  | "loyaltyProgram"
  | "noPointsPrizes"
  | "informationalAlerts"
  | "microBilling"
  | "trivia"
  | "entertainmentAlerts"
  | "accountNotification"
  | "ageGatedContent"
  | "conversationalMessaging"
  | "deliveryNotification"
  | "education"
  | "emergencyAlerts"
  | "fraudAlerts"
  | "loanArrangement"
  | "onBehalfOfCarrier"
  | "political"
  | "promotionalMarketing"
  | "publicServiceAnnouncements"
  | "securityAlerts"
  | "socialMedia"
  | "twoFactorAuthentication"
  | "other";
/** Defines values for MessageDirection. */
export type MessageDirection = "toUser" | "fromUser";

/** Optional parameters. */
export interface ShortCodesGetShortCodesOptionalParams
  extends coreHttp.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. */
  top?: number;
}

/** Contains response data for the getShortCodes operation. */
export type ShortCodesGetShortCodesResponse = ShortCodes & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ShortCodes;
  };
};

/** Optional parameters. */
export interface ShortCodesUpsertUSProgramBriefOptionalParams
  extends coreHttp.OperationOptions {
  /** Data to create new a Program Brief or fields to update an existing Program Brief */
  body?: USProgramBrief;
}

/** Contains response data for the upsertUSProgramBrief operation. */
export type ShortCodesUpsertUSProgramBriefResponse = USProgramBrief & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: USProgramBrief;
  };
};

/** Contains response data for the getUSProgramBrief operation. */
export type ShortCodesGetUSProgramBriefResponse = USProgramBrief & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: USProgramBrief;
  };
};

/** Contains response data for the submitUSProgramBrief operation. */
export type ShortCodesSubmitUSProgramBriefResponse = USProgramBrief & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: USProgramBrief;
  };
};

/** Optional parameters. */
export interface ShortCodesGetUSProgramBriefsOptionalParams
  extends coreHttp.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. */
  top?: number;
}

/** Contains response data for the getUSProgramBriefs operation. */
export type ShortCodesGetUSProgramBriefsResponse = USProgramBriefs & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: USProgramBriefs;
  };
};

/** Optional parameters. */
export interface ShortCodesGetShortCodesNextOptionalParams
  extends coreHttp.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. */
  top?: number;
}

/** Contains response data for the getShortCodesNext operation. */
export type ShortCodesGetShortCodesNextResponse = ShortCodes & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ShortCodes;
  };
};

/** Optional parameters. */
export interface ShortCodesGetUSProgramBriefsNextOptionalParams
  extends coreHttp.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. */
  top?: number;
}

/** Contains response data for the getUSProgramBriefsNext operation. */
export type ShortCodesGetUSProgramBriefsNextResponse = USProgramBriefs & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: USProgramBriefs;
  };
};

/** Optional parameters. */
export interface ShortCodesClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
