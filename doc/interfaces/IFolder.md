[fimidara](../README.md) / [Exports](../modules.md) / IFolder

# Interface: IFolder

## Table of contents

### Properties

- [createdAt](IFolder.md#createdat)
- [createdBy](IFolder.md#createdby)
- [description](IFolder.md#description)
- [idPath](IFolder.md#idpath)
- [lastUpdatedAt](IFolder.md#lastupdatedat)
- [lastUpdatedBy](IFolder.md#lastupdatedby)
- [name](IFolder.md#name)
- [namePath](IFolder.md#namepath)
- [parentId](IFolder.md#parentid)
- [publicAccessOps](IFolder.md#publicaccessops)
- [resourceId](IFolder.md#resourceid)
- [workspaceId](IFolder.md#workspaceid)

## Properties

### createdAt

• **createdAt**: `string` \| `Date`

#### Defined in

[src/definitions/folder.ts:24](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L24)

___

### createdBy

• **createdBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/folder.ts:23](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L23)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/definitions/folder.ts:30](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L30)

___

### idPath

• **idPath**: `string`[]

Sorted list of parent folder IDs. 2nd ot the last item is the immediate parent folder if present, and the last will be the folder's own ID.

#### Defined in

[src/definitions/folder.ts:19](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L19)

___

### lastUpdatedAt

• `Optional` **lastUpdatedAt**: `string` \| `Date`

#### Defined in

[src/definitions/folder.ts:26](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L26)

___

### lastUpdatedBy

• `Optional` **lastUpdatedBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/folder.ts:25](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L25)

___

### name

• **name**: `string`

Folder name. Folder names are case sensitive, meaning 'MyFolderName' will **not** match 'myfoldername'.

#### Defined in

[src/definitions/folder.ts:29](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L29)

___

### namePath

• **namePath**: `string`[]

Sorted list of parent folder names. 2nd ot the last item is the immediate parent folder if present, and the last will be the folder's own name.

#### Defined in

[src/definitions/folder.ts:22](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L22)

___

### parentId

• `Optional` **parentId**: `string`

Immediate parent folder ID if present.

#### Defined in

[src/definitions/folder.ts:16](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L16)

___

### publicAccessOps

• **publicAccessOps**: [`IPublicAccessOp`](IPublicAccessOp.md)[]

A list of public actions that can be performed on the folder, i.e, this list contains the list of actions an unauthorized or unauthenticated agent can perform on the folder. This is useful when you want a folder crawable or it's content accessible by the general internet.

#### Defined in

[src/definitions/folder.ts:33](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L33)

___

### resourceId

• **resourceId**: `string`

#### Defined in

[src/definitions/folder.ts:13](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L13)

___

### workspaceId

• **workspaceId**: `string`

#### Defined in

[src/definitions/folder.ts:14](https://github.com/softkave/files-js/blob/852341e/src/definitions/folder.ts#L14)
