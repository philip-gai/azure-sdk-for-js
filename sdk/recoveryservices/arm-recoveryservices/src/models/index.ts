/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type ResourceCertificateDetailsUnion =
  | ResourceCertificateDetails
  | ResourceCertificateAndAadDetails
  | ResourceCertificateAndAcsDetails;

/** Details of the certificate to be uploaded to the vault. */
export interface CertificateRequest {
  /** Raw certificate data. */
  properties?: RawCertificateData;
}

/** Raw certificate data. */
export interface RawCertificateData {
  /** Specifies the authentication type. */
  authType?: AuthType;
  /** The base64 encoded certificate raw data string */
  certificate?: Uint8Array;
}

/** Certificate corresponding to a vault that can be used by clients to register themselves with the vault. */
export interface VaultCertificateResponse {
  /**
   * Resource name associated with the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Resource Id represents the complete path to the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** Certificate details representing the Vault credentials. */
  properties?: ResourceCertificateDetailsUnion;
}

/** Certificate details representing the Vault credentials. */
export interface ResourceCertificateDetails {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authType: "AzureActiveDirectory" | "AccessControlService";
  /** The base64 encoded certificate raw data string. */
  certificate?: Uint8Array;
  /** Certificate friendly name. */
  friendlyName?: string;
  /** Certificate issuer. */
  issuer?: string;
  /** Resource ID of the vault. */
  resourceId?: number;
  /** Certificate Subject Name. */
  subject?: string;
  /** Certificate thumbprint. */
  thumbprint?: string;
  /** Certificate Validity start Date time. */
  validFrom?: Date;
  /** Certificate Validity End Date time. */
  validTo?: Date;
}

/** Replication usages for vault. */
export interface ReplicationUsageList {
  /** The list of replication usages for the given vault. */
  value?: ReplicationUsage[];
}

/** Replication usages of a vault. */
export interface ReplicationUsage {
  /** Summary of the replication monitoring data for this vault. */
  monitoringSummary?: MonitoringSummary;
  /** Summary of the replication jobs data for this vault. */
  jobsSummary?: JobsSummary;
  /** Number of replication protected items for this vault. */
  protectedItemCount?: number;
  /** Number of replication recovery plans for this vault. */
  recoveryPlanCount?: number;
  /** Number of servers registered to this vault. */
  registeredServersCount?: number;
  /** The authentication type of recovery service providers in the vault. */
  recoveryServicesProviderAuthType?: number;
}

/** Summary of the replication monitoring data for this vault. */
export interface MonitoringSummary {
  /** Count of unhealthy VMs. */
  unHealthyVmCount?: number;
  /** Count of unhealthy replication providers. */
  unHealthyProviderCount?: number;
  /** Count of all critical warnings. */
  eventsCount?: number;
  /** Count of all deprecated recovery service providers. */
  deprecatedProviderCount?: number;
  /** Count of all the supported recovery service providers. */
  supportedProviderCount?: number;
  /** Count of all the unsupported recovery service providers. */
  unsupportedProviderCount?: number;
}

/** Summary of the replication job data for this vault. */
export interface JobsSummary {
  /** Count of failed jobs. */
  failedJobs?: number;
  /** Count of suspended jobs. */
  suspendedJobs?: number;
  /** Count of in-progress jobs. */
  inProgressJobs?: number;
}

/** Class which represent the stamps associated with the vault. */
export interface PrivateLinkResources {
  /** A collection of private link resources */
  value?: PrivateLinkResource[];
  /** Link to the next chunk of the response */
  nextLink?: string;
}

/** Information of the private link resource. */
export interface PrivateLinkResource {
  /**
   * Fully qualified identifier of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * e.g. Microsoft.RecoveryServices/vaults/privateLinkResources
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * e.g. f9ad6492-33d4-4690-9999-6bfd52a0d081 (Backup) or f9ad6492-33d4-4690-9999-6bfd52a0d082 (SiteRecovery)
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * [backup-ecs1, backup-prot1, backup-prot1b, backup-prot1c, backup-id1]
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /**
   * The private link resource Private link DNS zone name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredZoneNames?: string[];
}

/** An error response from Azure Backup. */
export interface CloudError {
  /** The resource management error response. */
  error?: ErrorModel;
}

/** The resource management error response. */
export interface ErrorModel {
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorModel[];
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Resource Name availability input parameters - Resource type and resource name */
export interface CheckNameAvailabilityParameters {
  /** Describes the Resource type: Microsoft.RecoveryServices/Vaults */
  type?: string;
  /** Resource name for which availability needs to be checked */
  name?: string;
}

/** Response for check name availability API. Resource provider will set availability as true | false. */
export interface CheckNameAvailabilityResult {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/** The response model for a list of Vaults. */
export interface VaultList {
  value?: Vault[];
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly nextLink?: string;
}

/** ARM Resource. */
export interface Resource {
  /**
   * Resource Id represents the complete path to the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource name associated with the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Optional ETag. */
  etag?: string;
}

/** Identity for the resource. */
export interface IdentityData {
  /**
   * The principal ID of resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. */
  type: ResourceIdentityType;
  /** The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
  userAssignedIdentities?: { [propertyName: string]: UserIdentity };
}

/** A resource identity that is managed by the user of the service. */
export interface UserIdentity {
  /**
   * The principal ID of the user-assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client ID of the user-assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clientId?: string;
}

/** Properties of the vault. */
export interface VaultProperties {
  /**
   * Provisioning State.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /** Details for upgrading vault. */
  upgradeDetails?: UpgradeDetails;
  /**
   * List of private endpoint connection.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnectionVaultProperties[];
  /**
   * Private endpoint state for backup.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointStateForBackup?: VaultPrivateEndpointState;
  /**
   * Private endpoint state for site recovery.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointStateForSiteRecovery?: VaultPrivateEndpointState;
  /** Customer Managed Key details of the resource. */
  encryption?: VaultPropertiesEncryption;
  /** The details of the latest move operation performed on the Azure Resource */
  moveDetails?: VaultPropertiesMoveDetails;
  /**
   * The State of the Resource after the move operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly moveState?: ResourceMoveState;
}

/** Details for upgrading vault. */
export interface UpgradeDetails {
  /**
   * ID of the vault upgrade operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operationId?: string;
  /**
   * UTC time at which the upgrade operation has started.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTimeUtc?: Date;
  /**
   * UTC time at which the upgrade operation status was last updated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdatedTimeUtc?: Date;
  /**
   * UTC time at which the upgrade operation has ended.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endTimeUtc?: Date;
  /**
   * Status of the vault upgrade operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: VaultUpgradeState;
  /**
   * Message to the user containing information about the upgrade operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The way the vault upgrade was triggered.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerType?: TriggerType;
  /**
   * Resource ID of the upgraded vault.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly upgradedResourceId?: string;
  /**
   * Resource ID of the vault before the upgrade.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly previousResourceId?: string;
}

/** Information to be stored in Vault properties as an element of privateEndpointConnections List. */
export interface PrivateEndpointConnectionVaultProperties {
  /**
   * Format of id subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.[Service]/{resource}/{resourceName}/privateEndpointConnections/{connectionName}.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Private Endpoint Connection Response Properties.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly properties?: PrivateEndpointConnection;
  /**
   * The name of the private Endpoint Connection
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type, which will be of the format, Microsoft.RecoveryServices/vaults/privateEndpointConnections
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The location of the private Endpoint connection
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly location?: string;
}

/** Private Endpoint Connection Response Properties. */
export interface PrivateEndpointConnection {
  /**
   * Gets or sets provisioning state of the private endpoint connection.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The Private Endpoint network resource that is linked to the Private Endpoint connection.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpoint?: PrivateEndpoint;
  /**
   * Gets or sets private link service connection state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
}

/** The Private Endpoint network resource that is linked to the Private Endpoint connection. */
export interface PrivateEndpoint {
  /**
   * Gets or sets id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** Gets or sets private link service connection state. */
export interface PrivateLinkServiceConnectionState {
  /**
   * Gets or sets the status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: PrivateEndpointConnectionStatus;
  /**
   * Gets or sets description.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * Gets or sets actions required.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionsRequired?: string;
}

/** Customer Managed Key details of the resource. */
export interface VaultPropertiesEncryption {
  /** The properties of the Key Vault which hosts CMK */
  keyVaultProperties?: CmkKeyVaultProperties;
  /** The details of the identity used for CMK */
  kekIdentity?: CmkKekIdentity;
  /** Enabling/Disabling the Double Encryption state */
  infrastructureEncryption?: InfrastructureEncryptionState;
}

/** The properties of the Key Vault which hosts CMK */
export interface CmkKeyVaultProperties {
  /** The key uri of the Customer Managed Key */
  keyUri?: string;
}

/** The details of the identity used for CMK */
export interface CmkKekIdentity {
  /** Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field */
  useSystemAssignedIdentity?: boolean;
  /** The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned */
  userAssignedIdentity?: string;
}

/** The details of the latest move operation performed on the Azure Resource */
export interface VaultPropertiesMoveDetails {
  /**
   * OperationId of the Resource Move Operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operationId?: string;
  /**
   * Start Time of the Resource Move Operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTimeUtc?: Date;
  /**
   * End Time of the Resource Move Operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly completionTimeUtc?: Date;
  /**
   * Source Resource of the Resource Move Operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly sourceResourceId?: string;
  /**
   * Target Resource of the Resource Move Operation
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetResourceId?: string;
}

/** Identifies the unique system identifier for each Azure resource. */
export interface Sku {
  /** The Sku name. */
  name: SkuName;
  /** The Sku tier. */
  tier?: string;
  /** The sku family */
  family?: string;
  /** The sku size */
  size?: string;
  /** The sku capacity */
  capacity?: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The type of identity that last modified the resource. */
  lastModifiedAt?: Date;
}

/** Operations List response which contains list of available APIs. */
export interface ClientDiscoveryResponse {
  /** List of available operations. */
  value?: ClientDiscoveryValueForSingleApi[];
  /** Link to the next chunk of the response */
  nextLink?: string;
}

/** Available operation details. */
export interface ClientDiscoveryValueForSingleApi {
  /** Name of the Operation. */
  name?: string;
  /** Contains the localized display information for this particular operation */
  display?: ClientDiscoveryDisplay;
  /** The intended executor of the operation;governs the display of the operation in the RBAC UX and the audit logs UX */
  origin?: string;
  /** ShoeBox properties for the given operation. */
  properties?: ClientDiscoveryForProperties;
}

/** Localized display information of an operation. */
export interface ClientDiscoveryDisplay {
  /** Name of the provider for display purposes */
  provider?: string;
  /** ResourceType for which this Operation can be performed. */
  resource?: string;
  /** Operations Name itself. */
  operation?: string;
  /** Description of the operation having details of what operation is about. */
  description?: string;
}

/** Class to represent shoebox properties in json client discovery. */
export interface ClientDiscoveryForProperties {
  /** Operation properties. */
  serviceSpecification?: ClientDiscoveryForServiceSpecification;
}

/** Class to represent shoebox service specification in json client discovery. */
export interface ClientDiscoveryForServiceSpecification {
  /** List of log specifications of this operation. */
  logSpecifications?: ClientDiscoveryForLogSpecification[];
}

/** Class to represent shoebox log specification in json client discovery. */
export interface ClientDiscoveryForLogSpecification {
  /** Name of the log. */
  name?: string;
  /** Localized display name */
  displayName?: string;
  /** Blobs created in customer storage account per hour */
  blobDuration?: string;
}

/** Operation Resource */
export interface OperationResource {
  /** End time of the operation */
  endTime?: Date;
  /** Required if status == failed or status == canceled. This is the OData v4 error format, used by the RPC and will go into the v2.2 Azure REST API guidelines. */
  error?: ErrorModel;
  /** It should match what is used to GET the operation result */
  id?: string;
  /** It must match the last segment of the "id" field, and will typically be a GUID / system generated value */
  name?: string;
  /** The status of the operation. (InProgress/Success/Failed/Cancelled) */
  status?: string;
  /** Start time of the operation */
  startTime?: Date;
}

/** Usage for vault. */
export interface VaultUsageList {
  /** The list of usages for the given vault. */
  value?: VaultUsage[];
}

/** Usages of a vault. */
export interface VaultUsage {
  /** Unit of the usage. */
  unit?: UsagesUnit;
  /** Quota period of usage. */
  quotaPeriod?: string;
  /** Next reset time of usage. */
  nextResetTime?: Date;
  /** Current value of usage. */
  currentValue?: number;
  /** Limit of usage. */
  limit?: number;
  /** Name of usage. */
  name?: NameInfo;
}

/** The name of usage. */
export interface NameInfo {
  /** Value of usage. */
  value?: string;
  /** Localized value of usage. */
  localizedValue?: string;
}

/** Certificate details representing the Vault credentials for AAD. */
export type ResourceCertificateAndAadDetails = ResourceCertificateDetails & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authType: "AzureActiveDirectory";
  /** AAD tenant authority. */
  aadAuthority: string;
  /** AAD tenant Id. */
  aadTenantId: string;
  /** AAD service principal clientId. */
  servicePrincipalClientId: string;
  /** AAD service principal ObjectId. */
  servicePrincipalObjectId: string;
  /** Azure Management Endpoint Audience. */
  azureManagementEndpointAudience: string;
  /** Service Resource Id. */
  serviceResourceId?: string;
};

/** Certificate details representing the Vault credentials for ACS. */
export type ResourceCertificateAndAcsDetails = ResourceCertificateDetails & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authType: "AccessControlService";
  /** ACS namespace name - tenant for our service. */
  globalAcsNamespace: string;
  /** Acs mgmt host name to connect to. */
  globalAcsHostName: string;
  /** Global ACS namespace RP realm. */
  globalAcsRPRealm: string;
};

/** Tracked resource with location. */
export type TrackedResource = Resource & {
  /** Resource location. */
  location: string;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
};

/** Tracked resource with location. */
export type PatchTrackedResource = Resource & {
  /** Resource location. */
  location?: string;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
};

/** Vault extended information. */
export type VaultExtendedInfoResource = Resource & {
  /** Integrity key. */
  integrityKey?: string;
  /** Encryption key. */
  encryptionKey?: string;
  /** Encryption key thumbprint. */
  encryptionKeyThumbprint?: string;
  /** Algorithm for Vault ExtendedInfo */
  algorithm?: string;
};

/** Resource information, as returned by the resource provider. */
export type Vault = TrackedResource & {
  /** Identity for the resource. */
  identity?: IdentityData;
  /** Properties of the vault. */
  properties?: VaultProperties;
  /** Identifies the unique system identifier for each Azure resource. */
  sku?: Sku;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
};

/** Patch Resource information, as returned by the resource provider. */
export type PatchVault = PatchTrackedResource & {
  /** Properties of the vault. */
  properties?: VaultProperties;
  /** Identifies the unique system identifier for each Azure resource. */
  sku?: Sku;
  /** Identity for the resource. */
  identity?: IdentityData;
};

/** Known values of {@link AuthType} that the service accepts. */
export enum KnownAuthType {
  Invalid = "Invalid",
  ACS = "ACS",
  AAD = "AAD",
  AccessControlService = "AccessControlService",
  AzureActiveDirectory = "AzureActiveDirectory"
}

/**
 * Defines values for AuthType. \
 * {@link KnownAuthType} can be used interchangeably with AuthType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **ACS** \
 * **AAD** \
 * **AccessControlService** \
 * **AzureActiveDirectory**
 */
export type AuthType = string;

/** Known values of {@link ResourceIdentityType} that the service accepts. */
export enum KnownResourceIdentityType {
  SystemAssigned = "SystemAssigned",
  None = "None",
  UserAssigned = "UserAssigned",
  SystemAssignedUserAssigned = "SystemAssigned, UserAssigned"
}

/**
 * Defines values for ResourceIdentityType. \
 * {@link KnownResourceIdentityType} can be used interchangeably with ResourceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned** \
 * **None** \
 * **UserAssigned** \
 * **SystemAssigned, UserAssigned**
 */
export type ResourceIdentityType = string;

/** Known values of {@link VaultUpgradeState} that the service accepts. */
export enum KnownVaultUpgradeState {
  Unknown = "Unknown",
  InProgress = "InProgress",
  Upgraded = "Upgraded",
  Failed = "Failed"
}

/**
 * Defines values for VaultUpgradeState. \
 * {@link KnownVaultUpgradeState} can be used interchangeably with VaultUpgradeState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **InProgress** \
 * **Upgraded** \
 * **Failed**
 */
export type VaultUpgradeState = string;

/** Known values of {@link TriggerType} that the service accepts. */
export enum KnownTriggerType {
  UserTriggered = "UserTriggered",
  ForcedUpgrade = "ForcedUpgrade"
}

/**
 * Defines values for TriggerType. \
 * {@link KnownTriggerType} can be used interchangeably with TriggerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **UserTriggered** \
 * **ForcedUpgrade**
 */
export type TriggerType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  Succeeded = "Succeeded",
  Deleting = "Deleting",
  Failed = "Failed",
  Pending = "Pending"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Deleting** \
 * **Failed** \
 * **Pending**
 */
export type ProvisioningState = string;

/** Known values of {@link PrivateEndpointConnectionStatus} that the service accepts. */
export enum KnownPrivateEndpointConnectionStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  Disconnected = "Disconnected"
}

/**
 * Defines values for PrivateEndpointConnectionStatus. \
 * {@link KnownPrivateEndpointConnectionStatus} can be used interchangeably with PrivateEndpointConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected**
 */
export type PrivateEndpointConnectionStatus = string;

/** Known values of {@link VaultPrivateEndpointState} that the service accepts. */
export enum KnownVaultPrivateEndpointState {
  None = "None",
  Enabled = "Enabled"
}

/**
 * Defines values for VaultPrivateEndpointState. \
 * {@link KnownVaultPrivateEndpointState} can be used interchangeably with VaultPrivateEndpointState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Enabled**
 */
export type VaultPrivateEndpointState = string;

/** Known values of {@link InfrastructureEncryptionState} that the service accepts. */
export enum KnownInfrastructureEncryptionState {
  Enabled = "Enabled",
  Disabled = "Disabled"
}

/**
 * Defines values for InfrastructureEncryptionState. \
 * {@link KnownInfrastructureEncryptionState} can be used interchangeably with InfrastructureEncryptionState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type InfrastructureEncryptionState = string;

/** Known values of {@link ResourceMoveState} that the service accepts. */
export enum KnownResourceMoveState {
  Unknown = "Unknown",
  InProgress = "InProgress",
  PrepareFailed = "PrepareFailed",
  CommitFailed = "CommitFailed",
  PrepareTimedout = "PrepareTimedout",
  CommitTimedout = "CommitTimedout",
  MoveSucceeded = "MoveSucceeded",
  Failure = "Failure",
  CriticalFailure = "CriticalFailure",
  PartialSuccess = "PartialSuccess"
}

/**
 * Defines values for ResourceMoveState. \
 * {@link KnownResourceMoveState} can be used interchangeably with ResourceMoveState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **InProgress** \
 * **PrepareFailed** \
 * **CommitFailed** \
 * **PrepareTimedout** \
 * **CommitTimedout** \
 * **MoveSucceeded** \
 * **Failure** \
 * **CriticalFailure** \
 * **PartialSuccess**
 */
export type ResourceMoveState = string;

/** Known values of {@link SkuName} that the service accepts. */
export enum KnownSkuName {
  Standard = "Standard",
  RS0 = "RS0"
}

/**
 * Defines values for SkuName. \
 * {@link KnownSkuName} can be used interchangeably with SkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **RS0**
 */
export type SkuName = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link UsagesUnit} that the service accepts. */
export enum KnownUsagesUnit {
  Count = "Count",
  Bytes = "Bytes",
  Seconds = "Seconds",
  Percent = "Percent",
  CountPerSecond = "CountPerSecond",
  BytesPerSecond = "BytesPerSecond"
}

/**
 * Defines values for UsagesUnit. \
 * {@link KnownUsagesUnit} can be used interchangeably with UsagesUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Count** \
 * **Bytes** \
 * **Seconds** \
 * **Percent** \
 * **CountPerSecond** \
 * **BytesPerSecond**
 */
export type UsagesUnit = string;

/** Optional parameters. */
export interface VaultCertificatesCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type VaultCertificatesCreateResponse = VaultCertificateResponse;

/** Optional parameters. */
export interface RegisteredIdentitiesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ReplicationUsagesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ReplicationUsagesListResponse = ReplicationUsageList;

/** Optional parameters. */
export interface PrivateLinkResourcesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PrivateLinkResourcesListResponse = PrivateLinkResources;

/** Optional parameters. */
export interface PrivateLinkResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateLinkResourcesGetResponse = PrivateLinkResource;

/** Optional parameters. */
export interface PrivateLinkResourcesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type PrivateLinkResourcesListNextResponse = PrivateLinkResources;

/** Optional parameters. */
export interface RecoveryServicesCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type RecoveryServicesCheckNameAvailabilityResponse = CheckNameAvailabilityResult;

/** Optional parameters. */
export interface VaultsListBySubscriptionIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionId operation. */
export type VaultsListBySubscriptionIdResponse = VaultList;

/** Optional parameters. */
export interface VaultsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type VaultsListByResourceGroupResponse = VaultList;

/** Optional parameters. */
export interface VaultsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type VaultsGetResponse = Vault;

/** Optional parameters. */
export interface VaultsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type VaultsCreateOrUpdateResponse = Vault;

/** Optional parameters. */
export interface VaultsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface VaultsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type VaultsUpdateResponse = Vault;

/** Optional parameters. */
export interface VaultsListBySubscriptionIdNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionIdNext operation. */
export type VaultsListBySubscriptionIdNextResponse = VaultList;

/** Optional parameters. */
export interface VaultsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type VaultsListByResourceGroupNextResponse = VaultList;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = ClientDiscoveryResponse;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = ClientDiscoveryResponse;

/** Optional parameters. */
export interface VaultExtendedInfoGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type VaultExtendedInfoGetResponse = VaultExtendedInfoResource;

/** Optional parameters. */
export interface VaultExtendedInfoCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type VaultExtendedInfoCreateOrUpdateResponse = VaultExtendedInfoResource;

/** Optional parameters. */
export interface VaultExtendedInfoUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type VaultExtendedInfoUpdateResponse = VaultExtendedInfoResource;

/** Optional parameters. */
export interface RecoveryServicesClientGetOperationStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOperationStatus operation. */
export type RecoveryServicesClientGetOperationStatusResponse = OperationResource;

/** Optional parameters. */
export interface RecoveryServicesClientGetOperationResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOperationResult operation. */
export type RecoveryServicesClientGetOperationResultResponse = Vault;

/** Optional parameters. */
export interface UsagesListByVaultsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByVaults operation. */
export type UsagesListByVaultsResponse = VaultUsageList;

/** Optional parameters. */
export interface RecoveryServicesClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
