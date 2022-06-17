[fimidara](../README.md) / [Exports](../modules.md) / IPermissionGroupEndpoints

# Interface: IPermissionGroupEndpoints

## Table of contents

### Methods

- [addPermissionGroup](IPermissionGroupEndpoints.md#addpermissiongroup)
- [deletePermissionGroup](IPermissionGroupEndpoints.md#deletepermissiongroup)
- [getPermissionGroup](IPermissionGroupEndpoints.md#getpermissiongroup)
- [getWorkspacePermissionGroups](IPermissionGroupEndpoints.md#getworkspacepermissiongroups)
- [updatePermissionGroup](IPermissionGroupEndpoints.md#updatepermissiongroup)

## Methods

### addPermissionGroup

▸ **addPermissionGroup**(`props`): `Promise`<[`IAddPermissionGroupEndpointResult`](IAddPermissionGroupEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IAddPermissionGroupEndpointParams`](IAddPermissionGroupEndpointParams.md) |

#### Returns

`Promise`<[`IAddPermissionGroupEndpointResult`](IAddPermissionGroupEndpointResult.md)\>

#### Defined in

[src/definitions/permissionGroups.ts:77](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionGroups.ts#L77)

___

### deletePermissionGroup

▸ **deletePermissionGroup**(`props`): `Promise`<[`IEndpointResultBase`](IEndpointResultBase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IDeletePermissionGroupEndpointParams`](IDeletePermissionGroupEndpointParams.md) |

#### Returns

`Promise`<[`IEndpointResultBase`](IEndpointResultBase.md)\>

#### Defined in

[src/definitions/permissionGroups.ts:86](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionGroups.ts#L86)

___

### getPermissionGroup

▸ **getPermissionGroup**(`props`): `Promise`<[`IGetPermissionGroupEndpointResult`](IGetPermissionGroupEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetPermissionGroupEndpointParams`](IGetPermissionGroupEndpointParams.md) |

#### Returns

`Promise`<[`IGetPermissionGroupEndpointResult`](IGetPermissionGroupEndpointResult.md)\>

#### Defined in

[src/definitions/permissionGroups.ts:83](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionGroups.ts#L83)

___

### getWorkspacePermissionGroups

▸ **getWorkspacePermissionGroups**(`props`): `Promise`<[`IGetWorkspacePermissionGroupEndpointResult`](IGetWorkspacePermissionGroupEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetWorkspacePermissionGroupEndpointParams`](IGetWorkspacePermissionGroupEndpointParams.md) |

#### Returns

`Promise`<[`IGetWorkspacePermissionGroupEndpointResult`](IGetWorkspacePermissionGroupEndpointResult.md)\>

#### Defined in

[src/definitions/permissionGroups.ts:80](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionGroups.ts#L80)

___

### updatePermissionGroup

▸ **updatePermissionGroup**(`props`): `Promise`<[`IUpdatePermissionGroupEndpointResult`](IUpdatePermissionGroupEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IUpdatePermissionGroupEndpointParams`](IUpdatePermissionGroupEndpointParams.md) |

#### Returns

`Promise`<[`IUpdatePermissionGroupEndpointResult`](IUpdatePermissionGroupEndpointResult.md)\>

#### Defined in

[src/definitions/permissionGroups.ts:89](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionGroups.ts#L89)
