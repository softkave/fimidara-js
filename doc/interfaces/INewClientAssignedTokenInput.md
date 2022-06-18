[fimidara](../README.md) / [Exports](../modules.md) / INewClientAssignedTokenInput

# Interface: INewClientAssignedTokenInput

## Table of contents

### Properties

- [description](INewClientAssignedTokenInput.md#description)
- [expires](INewClientAssignedTokenInput.md#expires)
- [name](INewClientAssignedTokenInput.md#name)
- [permissionGroups](INewClientAssignedTokenInput.md#permissiongroups)
- [providedResourceId](INewClientAssignedTokenInput.md#providedresourceid)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/clientAssignedToken.ts:42](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L42)

___

### expires

• `Optional` **expires**: `string`

#### Defined in

[src/definitions/clientAssignedToken.ts:43](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L43)

___

### name

• `Optional` **name**: `string`

Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'.

#### Defined in

[src/definitions/clientAssignedToken.ts:41](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L41)

___

### permissionGroups

• **permissionGroups**: [`IPermissionGroupInput`](IPermissionGroupInput.md)[]

Permission groups to assign to the token. When updating a token's permission groups, it will replace existing groups, meaning if you want to add a new permission group, you should include the existing groups and the new one. Also, if you want to remove a permission group, pass the existing permission groups without the group you want to remove.

#### Defined in

[src/definitions/clientAssignedToken.ts:46](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L46)

___

### providedResourceId

• `Optional` **providedResourceId**: `string`

Optional ID provided for easy retrieval and reuse of client tokens. Example can be a user ID.

#### Defined in

[src/definitions/clientAssignedToken.ts:38](https://github.com/softkave/files-js/blob/852341e/src/definitions/clientAssignedToken.ts#L38)
