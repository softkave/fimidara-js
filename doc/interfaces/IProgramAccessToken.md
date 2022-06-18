[fimidara](../README.md) / [Exports](../modules.md) / IProgramAccessToken

# Interface: IProgramAccessToken

## Table of contents

### Properties

- [createdAt](IProgramAccessToken.md#createdat)
- [createdBy](IProgramAccessToken.md#createdby)
- [description](IProgramAccessToken.md#description)
- [lastUpdatedAt](IProgramAccessToken.md#lastupdatedat)
- [lastUpdatedBy](IProgramAccessToken.md#lastupdatedby)
- [name](IProgramAccessToken.md#name)
- [permissionGroups](IProgramAccessToken.md#permissiongroups)
- [resourceId](IProgramAccessToken.md#resourceid)
- [tokenStr](IProgramAccessToken.md#tokenstr)
- [workspaceId](IProgramAccessToken.md#workspaceid)

## Properties

### createdAt

• **createdAt**: `string`

#### Defined in

[src/definitions/programAccessToken.ts:15](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L15)

___

### createdBy

• **createdBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/programAccessToken.ts:16](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L16)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/programAccessToken.ts:14](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L14)

___

### lastUpdatedAt

• `Optional` **lastUpdatedAt**: `string`

#### Defined in

[src/definitions/programAccessToken.ts:21](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L21)

___

### lastUpdatedBy

• `Optional` **lastUpdatedBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/programAccessToken.ts:22](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L22)

___

### name

• **name**: `string`

Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'.

#### Defined in

[src/definitions/programAccessToken.ts:13](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L13)

___

### permissionGroups

• **permissionGroups**: [`IAssignedPermissionGroup`](IAssignedPermissionGroup.md)[]

Permission groups assigned to the token.

#### Defined in

[src/definitions/programAccessToken.ts:20](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L20)

___

### resourceId

• **resourceId**: `string`

#### Defined in

[src/definitions/programAccessToken.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L10)

___

### tokenStr

• **tokenStr**: `string`

JWT token string.

#### Defined in

[src/definitions/programAccessToken.ts:25](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L25)

___

### workspaceId

• **workspaceId**: `string`

#### Defined in

[src/definitions/programAccessToken.ts:17](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L17)
