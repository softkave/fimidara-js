[fimidara](../README.md) / [Exports](../modules.md) / PermissionItemAppliesTo

# Enumeration: PermissionItemAppliesTo

## Table of contents

### Enumeration Members

- [Children](PermissionItemAppliesTo.md#children)
- [Owner](PermissionItemAppliesTo.md#owner)
- [OwnerAndChildren](PermissionItemAppliesTo.md#ownerandchildren)

## Enumeration Members

### Children

• **Children**

The permission applies only to the permission owner's children resources. For example, if the permission targets a workspace, the permission will only grant or deny access to only it's chilren resources, like the files and folders within and not the workspace itself.

#### Defined in

[src/definitions/permissionItem.ts:13](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L13)

___

### Owner

• **Owner**

The permission applies only to the permission item owner. For example, if the permission targets a workspace, the permission will only grant or deny access to only the workspace, and not it's chilren resources, like the files and folders within.

#### Defined in

[src/definitions/permissionItem.ts:7](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L7)

___

### OwnerAndChildren

• **OwnerAndChildren**

The permission applies to the permission owner and it's children resources. For example, if the permission targets a workspace, the permission will only grant or deny access to both the workspace, and it's chilren resources, like the files and folders within.

#### Defined in

[src/definitions/permissionItem.ts:10](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L10)
