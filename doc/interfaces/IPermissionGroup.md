[fimidara](../README.md) / [Exports](../modules.md) / IPermissionGroup

# Interface: IPermissionGroup

## Table of contents

### Properties

- [createdAt](IPermissionGroup.md#createdat)
- [createdBy](IPermissionGroup.md#createdby)
- [description](IPermissionGroup.md#description)
- [lastUpdatedAt](IPermissionGroup.md#lastupdatedat)
- [lastUpdatedBy](IPermissionGroup.md#lastupdatedby)
- [name](IPermissionGroup.md#name)
- [permissionGroups](IPermissionGroup.md#permissiongroups)
- [resourceId](IPermissionGroup.md#resourceid)
- [workspaceId](IPermissionGroup.md#workspaceid)

## Properties

### createdAt

• **createdAt**: `string`

#### Defined in

[src/definitions/permissionGroups.ts:18](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L18)

___

### createdBy

• **createdBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/permissionGroups.ts:19](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L19)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/permissionGroups.ts:25](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L25)

___

### lastUpdatedAt

• `Optional` **lastUpdatedAt**: `string`

#### Defined in

[src/definitions/permissionGroups.ts:20](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L20)

___

### lastUpdatedBy

• `Optional` **lastUpdatedBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/permissionGroups.ts:21](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L21)

___

### name

• **name**: `string`

Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'.

#### Defined in

[src/definitions/permissionGroups.ts:24](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L24)

___

### permissionGroups

• **permissionGroups**: [`IAssignedPermissionGroup`](IAssignedPermissionGroup.md)[]

Permission groups assigned to this group. It allows you to compose permission groups so that a group can inherit the permissions of other groups.

#### Defined in

[src/definitions/permissionGroups.ts:28](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L28)

___

### resourceId

• **resourceId**: `string`

#### Defined in

[src/definitions/permissionGroups.ts:16](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L16)

___

### workspaceId

• **workspaceId**: `string`

#### Defined in

[src/definitions/permissionGroups.ts:17](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L17)
