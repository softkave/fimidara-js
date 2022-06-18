[fimidara](../README.md) / [Exports](../modules.md) / IPublicAccessOp

# Interface: IPublicAccessOp

## Table of contents

### Properties

- [action](IPublicAccessOp.md#action)
- [markedAt](IPublicAccessOp.md#markedat)
- [markedBy](IPublicAccessOp.md#markedby)
- [resourceType](IPublicAccessOp.md#resourcetype)

## Properties

### action

• **action**: [`BasicCRUDActions`](../enums/BasicCRUDActions.md)

Action permitted.

#### Defined in

[src/definitions/system.ts:24](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L24)

___

### markedAt

• **markedAt**: `string` \| `Date`

#### Defined in

[src/definitions/system.ts:28](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L28)

___

### markedBy

• **markedBy**: [`IAgent`](IAgent.md)

#### Defined in

[src/definitions/system.ts:29](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L29)

___

### resourceType

• **resourceType**: [`Folder`](../enums/AppResourceType.md#folder) \| [`File`](../enums/AppResourceType.md#file)

Resource type action is allowed on.

#### Defined in

[src/definitions/system.ts:27](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L27)
