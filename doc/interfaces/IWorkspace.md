[fimidara](../README.md) / [Exports](../modules.md) / IWorkspace

# Interface: IWorkspace

## Table of contents

### Properties

- [billStatus](IWorkspace.md#billstatus)
- [billStatusAssignedAt](IWorkspace.md#billstatusassignedat)
- [createdAt](IWorkspace.md#createdat)
- [createdBy](IWorkspace.md#createdby)
- [description](IWorkspace.md#description)
- [lastUpdatedAt](IWorkspace.md#lastupdatedat)
- [lastUpdatedBy](IWorkspace.md#lastupdatedby)
- [name](IWorkspace.md#name)
- [publicPermissionGroupId](IWorkspace.md#publicpermissiongroupid)
- [resourceId](IWorkspace.md#resourceid)

## Properties

### billStatus

• **billStatus**: [`WorkspaceBillStatus`](../enums/WorkspaceBillStatus.md)

The workspace's bill status.

#### Defined in

[src/definitions/workspace.ts:40](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L40)

___

### billStatusAssignedAt

• **billStatusAssignedAt**: `string` \| `Date`

#### Defined in

[src/definitions/workspace.ts:37](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L37)

___

### createdAt

• **createdAt**: `string` \| `Date`

#### Defined in

[src/definitions/workspace.ts:20](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L20)

___

### createdBy

• **createdBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/workspace.ts:19](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L19)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/workspace.ts:26](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L26)

___

### lastUpdatedAt

• **lastUpdatedAt**: `string` \| `Date`

#### Defined in

[src/definitions/workspace.ts:22](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L22)

___

### lastUpdatedBy

• **lastUpdatedBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/workspace.ts:21](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L21)

___

### name

• **name**: `string`

Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'.

#### Defined in

[src/definitions/workspace.ts:25](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L25)

___

### publicPermissionGroupId

• `Optional` **publicPermissionGroupId**: `string`

The public permission group ID.
The public permission group is the permission group assigned to unauthenticated or unauthorized agents. For example, if a `GET` `HTTP` request is made for a file without the `Authentication` header, or authentication or authorization fails for any reason, the calling agent will be assigned the public permission group while the server processes the request. The permission group is also assigned to all agents when processing a request but given the least weight. Meaning if an agent does not explicitly have a access to a file, but the public permission group has access to it, i.e, the file is designated public, the agent will be able to access the file.

This permission group is auto-generated when the workspace is created, and this field is its ID.

You can add permission items to this permission to make resources publicly accessible.

#### Defined in

[src/definitions/workspace.ts:36](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L36)

___

### resourceId

• **resourceId**: `string`

#### Defined in

[src/definitions/workspace.ts:18](https://github.com/softkave/files-js/blob/852341e/src/definitions/workspace.ts#L18)
