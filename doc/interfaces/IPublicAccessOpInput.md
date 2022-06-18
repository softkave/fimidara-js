[fimidara](../README.md) / [Exports](../modules.md) / IPublicAccessOpInput

# Interface: IPublicAccessOpInput

Describes a public action allowed on a resource. A public action is an action that can be performed by an unauthenticated or unauthorized agent.

## Table of contents

### Properties

- [action](IPublicAccessOpInput.md#action)
- [resourceType](IPublicAccessOpInput.md#resourcetype)

## Properties

### action

• **action**: [`BasicCRUDActions`](../enums/BasicCRUDActions.md)

Action permitted.

#### Defined in

[src/definitions/system.ts:16](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L16)

___

### resourceType

• **resourceType**: [`Folder`](../enums/AppResourceType.md#folder) \| [`File`](../enums/AppResourceType.md#file)

Resource type action is allowed on.

#### Defined in

[src/definitions/system.ts:19](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L19)
