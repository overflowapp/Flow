# Flow

Flow contains the universal [typings](/src/typings/namespace.d.ts) and basic layout of how a `.flow` file should be structured and defined.

## Examples
- [Minimal file](src/examples/minimalFile.ts) (the most minimal .flow data structure you could have)
- [Basic file](src/examples/basicFile.ts) (a data structure containing Screens and settings)
- [Basic file with Connections](src/examples/basicFileWithConnections.ts) (a data structure containing Screens connections to other nodes)


## Building a `.flow` file from the Basic structure

1.  Clone repo
2. `cd Flow`
3.  `yarn`
4.  `yarn run build` to build a .flow file

## Private Node Types

### `Node`

| Property  | Type | Description |
| :--- | :--- | :--- |
| **id**  | `string` | A unique identifier for the node in the Document |
| **name**  | `string` | A non-unique identifier for the node in the Document |
| **type**  | `NodeType` | One of `NodeType` that declares what type of Node it is |


### `Shape extends Node`

| Property  | Type | Description |
| :--- | :--- | :--- |
| **position**  | `Flow.Point` | A unique identifier for the node in the Document |
| **size**  | `Flow.Size` | A non-unique identifier for the node in the Document |
| **connections**  | `Flow.Connection[]` | One of `NodeType` that declares what type of Node it is |

### `Graphic extends Node`

| Property  | Type | Description |
| :--- | :--- | :--- |
| **position**  | `Flow.Point` | A unique identifier for the node in the Document |
| **size**  | `Flow.Size` | A non-unique identifier for the node in the Document |
| **source**  | `Flow.FileAsset` or `Flow.URLAsset` | One of `NodeType` that declares what type of Node it is |
