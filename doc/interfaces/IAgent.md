[fimidara](../README.md) / [Exports](../modules.md) / IAgent

# Interface: IAgent

An agent is an entity that can perform an action.

## Table of contents

### Properties

- [agentId](IAgent.md#agentid)
- [agentType](IAgent.md#agenttype)

## Properties

### agentId

• **agentId**: `string`

Agent ID. User ID when `agentType` is [SessionAgentType.User](../enums/SessionAgentType.md#user), client assigned token ID when `agentType` is [SessionAgentType.ClientAssignedToken](../enums/SessionAgentType.md#clientassignedtoken), program access token ID when `agentType` is [SessionAgentType.ProgramAccessToken](../enums/SessionAgentType.md#programaccesstoken), `public` when `agentType` is [SessionAgentType.Public](../enums/SessionAgentType.md#public), and `system` when `agentType` is [SessionAgentType.System](../enums/SessionAgentType.md#system).

#### Defined in

[src/definitions/system.ts:35](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L35)

___

### agentType

• **agentType**: [`SessionAgentType`](../enums/SessionAgentType.md)

#### Defined in

[src/definitions/system.ts:36](https://github.com/softkave/files-js/blob/852341e/src/definitions/system.ts#L36)
