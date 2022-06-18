[fimidara](../README.md) / [Exports](../modules.md) / IAssignedPermissionGroup

# Interface: IAssignedPermissionGroup

## Table of contents

### Properties

- [assignedAt](IAssignedPermissionGroup.md#assignedat)
- [assignedBy](IAssignedPermissionGroup.md#assignedby)
- [order](IAssignedPermissionGroup.md#order)
- [permissionGroupId](IAssignedPermissionGroup.md#permissiongroupid)

## Properties

### assignedAt

• **assignedAt**: `string`

#### Defined in

[src/definitions/permissionGroups.ts:7](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L7)

___

### assignedBy

• **assignedBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/permissionGroups.ts:8](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L8)

___

### order

• **order**: `number`

Determines the weight of the permission group when evaluating permission items. Lower values will override permission groups with higher values.

#### Defined in

[src/definitions/permissionGroups.ts:11](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L11)

___

### permissionGroupId

• **permissionGroupId**: `string`

#### Defined in

[src/definitions/permissionGroups.ts:6](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionGroups.ts#L6)
