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

[src/definitions/permissionItem.ts:165](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L165)

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

[src/definitions/permissionItem.ts:168](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L168)

___

### getEntityPermissionItems

▸ **getEntityPermissionItems**(`props`): `Promise`<[`IGetEntityPermissionItemsEndpointResult`](IGetEntityPermissionItemsEndpointResult.md)\>

Returns all the permission items that directly belong to the entity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetEntityPermissionItemsEndpointParams`](IGetEntityPermissionItemsEndpointParams.md) |

#### Returns

`Promise`<[`IGetEntityPermissionItemsEndpointResult`](IGetEntityPermissionItemsEndpointResult.md)\>

#### Defined in

[src/definitions/permissionItem.ts:178](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L178)

___

### getResourcePermissionItems

▸ **getResourcePermissionItems**(`props`): `Promise`<[`IGetResourcePermissionItemsEndpointResult`](IGetResourcePermissionItemsEndpointResult.md)\>

Returns all the permission items that grant or deny access to the resource.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IGetResourcePermissionItemsEndpointParams`](IGetResourcePermissionItemsEndpointParams.md) |

#### Returns

`Promise`<[`IGetResourcePermissionItemsEndpointResult`](IGetResourcePermissionItemsEndpointResult.md)\>

#### Defined in

[src/definitions/permissionItem.ts:173](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L173)

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

[src/definitions/permissionItem.ts:181](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L181)
