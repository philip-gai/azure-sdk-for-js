## API Report File for "@azure/arm-orbital"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type ActionType = string;

// @public
export type AuthorizationStatus = "Allowed" | "Pending" | "Denied";

// @public
export type AutoTrackingConfiguration = "disabled" | "xBand" | "sBand";

// @public
export interface AvailableContacts {
    readonly endAzimuthDegrees?: number;
    readonly endElevationDegrees?: number;
    readonly groundStationName?: string;
    readonly maximumElevationDegrees?: number;
    readonly rxEndTime?: Date;
    readonly rxStartTime?: Date;
    spacecraft?: ResourceReference;
    readonly startAzimuthDegrees?: number;
    readonly startElevationDegrees?: number;
    readonly txEndTime?: Date;
    readonly txStartTime?: Date;
}

// @public
export interface AvailableContactsListResult {
    readonly nextLink?: string;
    value?: AvailableContacts[];
}

// @public
export interface AvailableGroundStation {
    altitudeMeters?: number;
    city?: string;
    readonly id?: string;
    latitudeDegrees?: number;
    location?: string;
    longitudeDegrees?: number;
    readonly name?: string;
    providerName?: string;
    readonly type?: string;
}

// @public
export interface AvailableGroundStationListResult {
    readonly nextLink?: string;
    value?: AvailableGroundStation[];
}

// @public
export interface AvailableGroundStations {
    get(groundStationName: string, options?: AvailableGroundStationsGetOptionalParams): Promise<AvailableGroundStationsGetResponse>;
    listByCapability(capability: Enum6, options?: AvailableGroundStationsListByCapabilityOptionalParams): PagedAsyncIterableIterator<AvailableGroundStation>;
}

// @public
export interface AvailableGroundStationsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AvailableGroundStationsGetResponse = AvailableGroundStation;

// @public
export interface AvailableGroundStationsListByCapabilityNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AvailableGroundStationsListByCapabilityNextResponse = AvailableGroundStationListResult;

// @public
export interface AvailableGroundStationsListByCapabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AvailableGroundStationsListByCapabilityResponse = AvailableGroundStationListResult;

// @public (undocumented)
export class AzureOrbital extends AzureOrbitalContext {
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: AzureOrbitalOptionalParams);
    // (undocumented)
    availableGroundStations: AvailableGroundStations;
    // (undocumented)
    contactProfiles: ContactProfiles;
    // (undocumented)
    contacts: Contacts;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    spacecrafts: Spacecrafts;
}

// @public (undocumented)
export class AzureOrbitalContext extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: AzureOrbitalOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface AzureOrbitalOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export type Capability = string;

// @public
export interface CloudError {
    error?: CloudErrorBody;
}

// @public
export interface CloudErrorBody {
    code?: string;
    details?: CloudErrorBody[];
    message?: string;
    target?: string;
}

// @public
export type Contact = ProxyResource & {
    readonly etag?: string;
    readonly status?: Status;
    reservationStartTime?: Date;
    reservationEndTime?: Date;
    readonly rxStartTime?: Date;
    readonly rxEndTime?: Date;
    readonly txStartTime?: Date;
    readonly txEndTime?: Date;
    readonly errorMessage?: string;
    readonly maximumElevationDegrees?: number;
    readonly startAzimuthDegrees?: number;
    readonly endAzimuthDegrees?: number;
    groundStationName?: string;
    readonly startElevationDegrees?: number;
    readonly endElevationDegrees?: number;
    contactProfile?: ResourceReference;
};

// @public
export interface ContactListResult {
    readonly nextLink?: string;
    value?: Contact[];
}

// @public
export interface ContactParameters {
    contactProfile: ResourceReference;
    endTime: Date;
    groundStationName: string;
    startTime: Date;
}

// @public
export type ContactProfile = TrackedResource & {
    readonly etag?: string;
    minimumViableContactDuration?: string;
    minimumElevationDegrees?: number;
    autoTrackingConfiguration?: AutoTrackingConfiguration;
    links?: ContactProfileLink[];
};

// @public
export interface ContactProfileLink {
    channels: ContactProfileLinkChannel[];
    direction: Direction;
    eirpdBW?: number;
    gainOverTemperature?: number;
    polarization: Polarization;
}

// @public
export interface ContactProfileLinkChannel {
    bandwidthMHz: number;
    centerFrequencyMHz: number;
    decodingConfiguration?: string;
    demodulationConfiguration?: string;
    encodingConfiguration?: string;
    endPoint: EndPoint;
    modulationConfiguration?: string;
}

// @public
export interface ContactProfileListResult {
    readonly nextLink?: string;
    value?: ContactProfile[];
}

// @public
export interface ContactProfiles {
    beginCreateOrUpdate(resourceGroupName: string, contactProfileName: string, location: string, options?: ContactProfilesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ContactProfilesCreateOrUpdateResponse>, ContactProfilesCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, contactProfileName: string, location: string, options?: ContactProfilesCreateOrUpdateOptionalParams): Promise<ContactProfilesCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, contactProfileName: string, options?: ContactProfilesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, contactProfileName: string, options?: ContactProfilesDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, contactProfileName: string, options?: ContactProfilesGetOptionalParams): Promise<ContactProfilesGetResponse>;
    list(resourceGroupName: string, options?: ContactProfilesListOptionalParams): PagedAsyncIterableIterator<ContactProfile>;
    listBySubscription(options?: ContactProfilesListBySubscriptionOptionalParams): PagedAsyncIterableIterator<ContactProfile>;
    updateTags(resourceGroupName: string, contactProfileName: string, parameters: TagsObject, options?: ContactProfilesUpdateTagsOptionalParams): Promise<ContactProfilesUpdateTagsResponse>;
}

// @public
export interface ContactProfilesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    autoTrackingConfiguration?: AutoTrackingConfiguration;
    links?: ContactProfileLink[];
    minimumElevationDegrees?: number;
    minimumViableContactDuration?: string;
    resumeFrom?: string;
    tags?: {
        [propertyName: string]: string;
    };
    updateIntervalInMs?: number;
}

// @public
export type ContactProfilesCreateOrUpdateResponse = ContactProfile;

// @public
export interface ContactProfilesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ContactProfilesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ContactProfilesGetResponse = ContactProfile;

// @public
export interface ContactProfilesListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ContactProfilesListBySubscriptionResponse = ContactProfileListResult;

// @public
export interface ContactProfilesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ContactProfilesListResponse = ContactProfileListResult;

// @public
export interface ContactProfilesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ContactProfilesUpdateTagsResponse = ContactProfile;

// @public
export interface Contacts {
    beginCreate(resourceGroupName: string, spacecraftName: string, contactName: string, parameters: Contact, options?: ContactsCreateOptionalParams): Promise<PollerLike<PollOperationState<ContactsCreateResponse>, ContactsCreateResponse>>;
    beginCreateAndWait(resourceGroupName: string, spacecraftName: string, contactName: string, parameters: Contact, options?: ContactsCreateOptionalParams): Promise<ContactsCreateResponse>;
    beginDelete(resourceGroupName: string, spacecraftName: string, contactName: string, options?: ContactsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, spacecraftName: string, contactName: string, options?: ContactsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, spacecraftName: string, contactName: string, options?: ContactsGetOptionalParams): Promise<ContactsGetResponse>;
    list(resourceGroupName: string, spacecraftName: string, options?: ContactsListOptionalParams): PagedAsyncIterableIterator<Contact>;
}

// @public
export interface ContactsCreateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type ContactsCreateResponse = Contact;

// @public
export interface ContactsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface ContactsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ContactsGetResponse = Contact;

// @public
export interface ContactsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ContactsListResponse = ContactListResult;

// @public
export type CreatedByType = string;

// @public
export type Direction = string;

// @public
export interface EndPoint {
    endPointName: string;
    ipAddress: string;
    port: string;
    protocol: Protocol;
}

// @public
export type Enum6 = string;

// @public
export enum KnownActionType {
    // (undocumented)
    Internal = "Internal"
}

// @public
export enum KnownCapability {
    // (undocumented)
    Communication = "Communication",
    // (undocumented)
    EarthObservation = "EarthObservation"
}

// @public
export enum KnownCreatedByType {
    // (undocumented)
    Application = "Application",
    // (undocumented)
    Key = "Key",
    // (undocumented)
    ManagedIdentity = "ManagedIdentity",
    // (undocumented)
    User = "User"
}

// @public
export enum KnownDirection {
    // (undocumented)
    Downlink = "downlink",
    // (undocumented)
    Uplink = "uplink"
}

// @public
export enum KnownEnum6 {
    // (undocumented)
    Communication = "Communication",
    // (undocumented)
    EarthObservation = "EarthObservation"
}

// @public
export enum KnownOrigin {
    // (undocumented)
    System = "system",
    // (undocumented)
    User = "user",
    // (undocumented)
    UserSystem = "user,system"
}

// @public
export enum KnownPolarization {
    // (undocumented)
    DualRhcpLhcp = "dualRhcpLhcp",
    // (undocumented)
    Lhcp = "LHCP",
    // (undocumented)
    LinearHorizontal = "linearHorizontal",
    // (undocumented)
    LinearVertical = "linearVertical",
    // (undocumented)
    Rhcp = "RHCP"
}

// @public
export enum KnownProtocol {
    // (undocumented)
    TCP = "TCP",
    // (undocumented)
    UDP = "UDP"
}

// @public
export interface Operation {
    readonly actionType?: ActionType;
    display?: OperationDisplay;
    readonly isDataAction?: boolean;
    readonly name?: string;
    readonly origin?: Origin;
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type Origin = string;

// @public
export type Polarization = string;

// @public
export type Protocol = string;

// @public
export type ProxyResource = Resource & {};

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface ResourceIdListResult {
    readonly nextLink?: string;
    value?: ResourceIdListResultValueItem[];
}

// @public (undocumented)
export interface ResourceIdListResultValueItem {
    id?: string;
}

// @public
export interface ResourceReference {
    id?: string;
}

// @public
export type Spacecraft = TrackedResource & {
    readonly etag?: string;
    noradId?: string;
    readonly authorizationStatus?: AuthorizationStatus;
    readonly authorizationStatusExtended?: string;
    titleLine?: string;
    tleLine1?: string;
    tleLine2?: string;
    links?: SpacecraftLink[];
};

// @public
export interface SpacecraftLink {
    bandwidthMHz: number;
    centerFrequencyMHz: number;
    direction: Direction;
    polarization: Polarization;
}

// @public
export interface SpacecraftListResult {
    readonly nextLink?: string;
    value?: Spacecraft[];
}

// @public
export interface Spacecrafts {
    beginCreateOrUpdate(resourceGroupName: string, spacecraftName: string, location: string, options?: SpacecraftsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SpacecraftsCreateOrUpdateResponse>, SpacecraftsCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, spacecraftName: string, location: string, options?: SpacecraftsCreateOrUpdateOptionalParams): Promise<SpacecraftsCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, spacecraftName: string, options?: SpacecraftsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, spacecraftName: string, options?: SpacecraftsDeleteOptionalParams): Promise<void>;
    beginListAvailableContacts(resourceGroupName: string, spacecraftName: string, contactProfile: ResourceReference, groundStationName: string, startTime: Date, endTime: Date, options?: SpacecraftsListAvailableContactsOptionalParams): Promise<PollerLike<PollOperationState<SpacecraftsListAvailableContactsResponse>, SpacecraftsListAvailableContactsResponse>>;
    beginListAvailableContactsAndWait(resourceGroupName: string, spacecraftName: string, contactProfile: ResourceReference, groundStationName: string, startTime: Date, endTime: Date, options?: SpacecraftsListAvailableContactsOptionalParams): Promise<SpacecraftsListAvailableContactsResponse>;
    get(resourceGroupName: string, spacecraftName: string, options?: SpacecraftsGetOptionalParams): Promise<SpacecraftsGetResponse>;
    list(resourceGroupName: string, options?: SpacecraftsListOptionalParams): PagedAsyncIterableIterator<Spacecraft>;
    listBySubscription(options?: SpacecraftsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Spacecraft>;
    updateTags(resourceGroupName: string, spacecraftName: string, parameters: TagsObject, options?: SpacecraftsUpdateTagsOptionalParams): Promise<SpacecraftsUpdateTagsResponse>;
}

// @public
export interface SpacecraftsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    links?: SpacecraftLink[];
    noradId?: string;
    resumeFrom?: string;
    tags?: {
        [propertyName: string]: string;
    };
    titleLine?: string;
    tleLine1?: string;
    tleLine2?: string;
    updateIntervalInMs?: number;
}

// @public
export type SpacecraftsCreateOrUpdateResponse = Spacecraft;

// @public
export interface SpacecraftsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface SpacecraftsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpacecraftsGetResponse = Spacecraft;

// @public
export interface SpacecraftsListAvailableContactsOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type SpacecraftsListAvailableContactsResponse = AvailableContactsListResult;

// @public
export interface SpacecraftsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpacecraftsListBySubscriptionResponse = SpacecraftListResult;

// @public
export interface SpacecraftsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpacecraftsListResponse = SpacecraftListResult;

// @public
export interface SpacecraftsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpacecraftsUpdateTagsResponse = Spacecraft;

// @public
export type Status = "scheduled" | "cancelled" | "succeeded" | "failed" | "providerCancelled";

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export interface TagsObject {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type TrackedResource = Resource & {
    tags?: {
        [propertyName: string]: string;
    };
    location: string;
};

// (No @packageDocumentation comment for this package)

```
