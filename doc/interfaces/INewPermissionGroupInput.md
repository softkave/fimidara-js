[fimidara](../README.md) / [Exports](../modules.md) / INewPermissionGroupInput

# Interface: INewPermissionGroupInput

## Table of contents

### Properties

- [description](INewPermissionGroupInput.md#description)
- [name](INewPermissionGroupInput.md#name)
- [permissionGroups](INewPermissionGroupInput.md#permissiongroups)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/permissionGroups.ts:43](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L43)

___

### name

• **name**: `string`

Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'.

#### Defined in

[src/definitions/permissionGroups.ts:42](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L42)

___

### permissionGroups

• `Optional` **permissionGroups**: [`IPermissionGroupInput`](IPermissionGroupInput.md)[]

Existing permission groups to assign to this group. When updating a group's assigned permission groups, it will replace existing groups, meaning if you want to add a new permission group, you should include the existing groups and the new one. Also, if you want to remove a permission group, pass the existing permission groups without the group you want to remove.

#### Defined in

[src/definitions/permissionGroups.ts:46](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L46)
