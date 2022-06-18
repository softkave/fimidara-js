[fimidara](../README.md) / [Exports](../modules.md) / INewProgramAccessTokenInput

# Interface: INewProgramAccessTokenInput

## Table of contents

### Properties

- [description](INewProgramAccessTokenInput.md#description)
- [name](INewProgramAccessTokenInput.md#name)
- [permissionGroups](INewProgramAccessTokenInput.md#permissiongroups)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/programAccessToken.ts:32](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L32)

___

### name

• **name**: `string`

Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'.

#### Defined in

[src/definitions/programAccessToken.ts:31](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L31)

___

### permissionGroups

• `Optional` **permissionGroups**: [`IPermissionGroupInput`](IPermissionGroupInput.md)[]

Permission groups to assign to the token. When updating a token's permission groups, it will replace existing groups, meaning if you want to add a new permission group, you should include the existing groups and the new one. Also, if you want to remove a permission group, pass the existing permission groups without the group you want to remove.

#### Defined in

[src/definitions/programAccessToken.ts:35](https://github.com/softkave/files-js/blob/852341e/src/definitions/programAccessToken.ts#L35)
