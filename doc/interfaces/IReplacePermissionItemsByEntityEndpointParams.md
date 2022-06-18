[fimidara](../README.md) / [Exports](../modules.md) / IReplacePermissionItemsByEntityEndpointParams

# Interface: IReplacePermissionItemsByEntityEndpointParams

## Hierarchy

- [`IEndpointParamsBase`](IEndpointParamsBase.md)

  ↳ **`IReplacePermissionItemsByEntityEndpointParams`**

## Table of contents

### Properties

- [authToken](IReplacePermissionItemsByEntityEndpointParams.md#authtoken)
- [items](IReplacePermissionItemsByEntityEndpointParams.md#items)
- [permissionEntityId](IReplacePermissionItemsByEntityEndpointParams.md#permissionentityid)
- [permissionEntityType](IReplacePermissionItemsByEntityEndpointParams.md#permissionentitytype)

## Properties

### authToken

• `Optional` **authToken**: `string`

#### Inherited from

[IEndpointParamsBase](IEndpointParamsBase.md).[authToken](IEndpointParamsBase.md#authtoken)

#### Defined in

[src/definitions/types.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/types.ts#L10)

___

### items

• **items**: [`INewPermissionItemInputByEntity`](INewPermissionItemInputByEntity.md)[]

#### Defined in

[src/definitions/permissionItem.ts:155](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L155)

___

### permissionEntityId

• **permissionEntityId**: `string`

**`see`** {@link IPermissionItem#permissionEntityId}

#### Defined in

[src/definitions/permissionItem.ts:153](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L153)

___

### permissionEntityType

• **permissionEntityType**: [`AppResourceType`](../enums/AppResourceType.md)

#### Defined in

[src/definitions/permissionItem.ts:154](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L154)
