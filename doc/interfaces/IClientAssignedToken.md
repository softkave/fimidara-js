[fimidara](../README.md) / [Exports](../modules.md) / IClientAssignedToken

# Interface: IClientAssignedToken

## Table of contents

### Properties

- [createdAt](IClientAssignedToken.md#createdat)
- [createdBy](IClientAssignedToken.md#createdby)
- [expires](IClientAssignedToken.md#expires)
- [issuedAt](IClientAssignedToken.md#issuedat)
- [lastUpdatedAt](IClientAssignedToken.md#lastupdatedat)
- [lastUpdatedBy](IClientAssignedToken.md#lastupdatedby)
- [name](IClientAssignedToken.md#name)
- [permissionGroups](IClientAssignedToken.md#permissiongroups)
- [providedResourceId](IClientAssignedToken.md#providedresourceid)
- [resourceId](IClientAssignedToken.md#resourceid)
- [tokenStr](IClientAssignedToken.md#tokenstr)
- [version](IClientAssignedToken.md#version)
- [workspaceId](IClientAssignedToken.md#workspaceid)

## Properties

### createdAt

• **createdAt**: `string`

#### Defined in

[src/definitions/clientAssignedToken.ts:17](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L17)

___

### createdBy

• **createdBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/clientAssignedToken.ts:18](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L18)

___

### expires

• `Optional` **expires**: `number`

#### Defined in

[src/definitions/clientAssignedToken.ts:29](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L29)

___

### issuedAt

• **issuedAt**: `string`

**`todo`** make the type of `issuedAt` and `expires` consistent.

#### Defined in

[src/definitions/clientAssignedToken.ts:28](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L28)

___

### lastUpdatedAt

• `Optional` **lastUpdatedAt**: `string`

#### Defined in

[src/definitions/clientAssignedToken.ts:20](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L20)

___

### lastUpdatedBy

• `Optional` **lastUpdatedBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/clientAssignedToken.ts:19](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L19)

___

### name

• `Optional` **name**: `string`

Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'.

#### Defined in

[src/definitions/clientAssignedToken.ts:13](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L13)

___

### permissionGroups

• **permissionGroups**: [`IAssignedPermissionGroup`](IAssignedPermissionGroup.md)[]

Permission groups assigned to the token.

#### Defined in

[src/definitions/clientAssignedToken.ts:25](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L25)

___

### providedResourceId

• `Optional` **providedResourceId**: `string`

Optional ID provided for easy retrieval and reuse of client tokens. Example can be a user ID.

#### Defined in

[src/definitions/clientAssignedToken.ts:16](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L16)

___

### resourceId

• **resourceId**: `string`

#### Defined in

[src/definitions/clientAssignedToken.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L10)

___

### tokenStr

• **tokenStr**: `string`

JWT token string.

#### Defined in

[src/definitions/clientAssignedToken.ts:32](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L32)

___

### version

• **version**: `number`

#### Defined in

[src/definitions/clientAssignedToken.ts:22](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L22)

___

### workspaceId

• **workspaceId**: `string`

#### Defined in

[src/definitions/clientAssignedToken.ts:21](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L21)
