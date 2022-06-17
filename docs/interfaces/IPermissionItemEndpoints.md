[fimidara](../README.md) / [Exports](../modules.md) / IPermissionItemEndpoints

# Interface: IPermissionItemEndpoints

## Table of contents

### Methods

- [addItems](IPermissionItemEndpoints.md#additems)
- [deleteItemsById](IPermissionItemEndpoints.md#deleteitemsbyid)
- [getEntityPermissionItems](IPermissionItemEndpoints.md#getentitypermissionitems)
- [getResourcePermissionItems](IPermissionItemEndpoints.md#getresourcepermissionitems)
- [replacePermissionItemsByEntity](IPermissionItemEndpoints.md#replacepermissionitemsbyentity)

## Methods

### addItems

▸ **addItems**(`props`): `Promise`<[`IAddPermissionItemsEndpointResult`](IAddPermissionItemsEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IAddPermissionItemsEndpointParams`](IAddPermissionItemsEndpointParams.md) |

#### Returns

`Promise`<[`IAddPermissionItemsEndpointResult`](IAddPermissionItemsEndpointResult.md)\>

#### Defined in

[src/definitions/permissionItem.ts:110](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionItem.ts#L110)

___

### deleteItemsById

▸ **deleteItemsById**(`props`): `Promise`<[`IEndpointResultBase`](IEndpointResultBase.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IDeletePermissionItemsByIdEndpointParams`](IDeletePermissionItemsByIdEndpointParams.md) |

#### Returns

`Promise`<[`IEndpointResultBase`](IEndpointResultBase.md)\>

#### Defined in

[src/definitions/permissionItem.ts:114](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionItem.ts#L114)

___

### getEntityPermissionItems

▸ **getEntityPermissionItems**(`props`): `Promise`<[`IGetEntityPermissionItemsEndpointResult`](IGetEntityPermissionItemsEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetEntityPermissionItemsEndpointParams`](IGetEntityPermissionItemsEndpointParams.md) |

#### Returns

`Promise`<[`IGetEntityPermissionItemsEndpointResult`](IGetEntityPermissionItemsEndpointResult.md)\>

#### Defined in

[src/definitions/permissionItem.ts:122](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionItem.ts#L122)

___

### getResourcePermissionItems

▸ **getResourcePermissionItems**(`props`): `Promise`<[`IGetResourcePermissionItemsEndpointResult`](IGetResourcePermissionItemsEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetResourcePermissionItemsEndpointParams`](IGetResourcePermissionItemsEndpointParams.md) |

#### Returns

`Promise`<[`IGetResourcePermissionItemsEndpointResult`](IGetResourcePermissionItemsEndpointResult.md)\>

#### Defined in

[src/definitions/permissionItem.ts:118](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionItem.ts#L118)

___

### replacePermissionItemsByEntity

▸ **replacePermissionItemsByEntity**(`props`): `Promise`<[`IReplacePermissionItemsByEntityEndpointResult`](IReplacePermissionItemsByEntityEndpointResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IReplacePermissionItemsByEntityEndpointParams`](IReplacePermissionItemsByEntityEndpointParams.md) |

#### Returns

`Promise`<[`IReplacePermissionItemsByEntityEndpointResult`](IReplacePermissionItemsByEntityEndpointResult.md)\>

#### Defined in

[src/definitions/permissionItem.ts:126](https://github.com/softkave/files-js/blob/353a07f/src/definitions/permissionItem.ts#L126)
