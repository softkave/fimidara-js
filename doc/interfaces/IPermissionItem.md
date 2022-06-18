[fimidara](../README.md) / [Exports](../modules.md) / IPermissionItem

# Interface: IPermissionItem

## Table of contents

### Properties

- [action](IPermissionItem.md#action)
- [appliesTo](IPermissionItem.md#appliesto)
- [createdAt](IPermissionItem.md#createdat)
- [createdBy](IPermissionItem.md#createdby)
- [grantAccess](IPermissionItem.md#grantaccess)
- [itemResourceId](IPermissionItem.md#itemresourceid)
- [itemResourceType](IPermissionItem.md#itemresourcetype)
- [permissionEntityId](IPermissionItem.md#permissionentityid)
- [permissionEntityType](IPermissionItem.md#permissionentitytype)
- [permissionOwnerId](IPermissionItem.md#permissionownerid)
- [permissionOwnerType](IPermissionItem.md#permissionownertype)
- [resourceId](IPermissionItem.md#resourceid)
- [workspaceId](IPermissionItem.md#workspaceid)

## Properties

### action

• **action**: [`BasicCRUDActions`](../enums/BasicCRUDActions.md)

The action that the permission item grants or denies access to.

#### Defined in

[src/definitions/permissionItem.ts:48](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L48)

___

### appliesTo

• **appliesTo**: [`PermissionItemAppliesTo`](../enums/PermissionItemAppliesTo.md)

Whether permission item applies to the permission owner and or it's children resources.

#### Defined in

[src/definitions/permissionItem.ts:54](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L54)

___

### createdAt

• **createdAt**: `string`

#### Defined in

[src/definitions/permissionItem.ts:20](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L20)

___

### createdBy

• **createdBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/permissionItem.ts:21](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L21)

___

### grantAccess

• **grantAccess**: `boolean`

Whether the permission item grants or denies access to the permission entity.

#### Defined in

[src/definitions/permissionItem.ts:51](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L51)

___

### itemResourceId

• `Optional` **itemResourceId**: `string`

The item resource is the resource the permission item grants or denies access to. Must be a resource that belongs to or that is a child of the permission owner. For example, if the permission owner is a folder, the item resource can be a file or a folder within the folder.

If `itemResourceId` is not specified, the permission item will apply to all the resources of type `itemResourceType` that belong to the permission owner. If it is specified, the permission item will apply to the resource with the specified ID of the specified type.

#### Defined in

[src/definitions/permissionItem.ts:44](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L44)

___

### itemResourceType

• **itemResourceType**: [`AppResourceType`](../enums/AppResourceType.md)

#### Defined in

[src/definitions/permissionItem.ts:45](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L45)

___

### permissionEntityId

• **permissionEntityId**: `string`

A permission entity is the resource type the permission item grants or denies access on behalf of. For example, if the permission belongs to a permission group named `MyPermissionGroup`, the permission will only grant or deny access to agents (users, client tokens, and program tokens) that have been assigned the permission group. When evaluating an access request on behalf of an agent that has not been assigned the permission group, the permission item will not be considered.

Currently, there are 4 permission entity types, [AppResourceType.User](../enums/AppResourceType.md#user), [AppResourceType.ProgramAccessToken](../enums/AppResourceType.md#programaccesstoken), [AppResourceType.ClientAssignedToken](../enums/AppResourceType.md#clientassignedtoken), and [AppResourceType.PermissionGroup](../enums/AppResourceType.md#permissiongroup). If the type is [AppResourceType.User](../enums/AppResourceType.md#user), `permissionEntityId` will be the user's ID, if the type is [AppResourceType.ProgramAccessToken](../enums/AppResourceType.md#programaccesstoken), `permissionEntityId` will be the token's ID, if the type is [AppResourceType.ClientAssignedToken](../enums/AppResourceType.md#clientassignedtoken), `permissionEntityId` will be the token's ID, and if the type is [AppResourceType.PermissionGroup](../enums/AppResourceType.md#permissiongroup), `permissionEntityId` will be the permission group's ID.

#### Defined in

[src/definitions/permissionItem.ts:36](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L36)

___

### permissionEntityType

• **permissionEntityType**: [`AppResourceType`](../enums/AppResourceType.md)

#### Defined in

[src/definitions/permissionItem.ts:37](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L37)

___

### permissionOwnerId

• **permissionOwnerId**: `string`

The permission owner is the container resource that the permission item applies to. For example, if the permission targets a folder, the permission will only grant or deny access to the folder, and it's chilren resources, like the files and folders within depending on the value of the `appliesTo` field. This permission item will not be considered when evaluating an access request for a sibling or parent folder.

Currently, there are 3 permission owner types, [AppResourceType.Workspace](../enums/AppResourceType.md#workspace), [AppResourceType.Folder](../enums/AppResourceType.md#folder), and [AppResourceType.File](../enums/AppResourceType.md#file). If the type is [AppResourceType.Workspace](../enums/AppResourceType.md#workspace), `permissionOwnerId` will be the workspace's ID, if the type is [AppResourceType.Folder](../enums/AppResourceType.md#folder), `permissionOwnerId` will be the folder's ID, and if the type is [AppResourceType.File](../enums/AppResourceType.md#file), `permissionOwnerId` will be the file's ID.

#### Defined in

[src/definitions/permissionItem.ts:28](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L28)

___

### permissionOwnerType

• **permissionOwnerType**: [`AppResourceType`](../enums/AppResourceType.md)

#### Defined in

[src/definitions/permissionItem.ts:29](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L29)

___

### resourceId

• **resourceId**: `string`

#### Defined in

[src/definitions/permissionItem.ts:18](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L18)

___

### workspaceId

• **workspaceId**: `string`

#### Defined in

[src/definitions/permissionItem.ts:19](https://github.com/softkave/files-js/blob/852341e/src/definitions/permissionItem.ts#L19)
