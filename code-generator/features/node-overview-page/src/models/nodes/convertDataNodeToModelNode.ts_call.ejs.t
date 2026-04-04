---
inject: true
to: src/models/nodes/convertDataNodeToModelNode.ts
before: DataNodeType.IMAGE
skip_if: "case DataNodeType.<%= h.changeCase.constant(nodeType) %>"
---
        case DataNodeType.<%= h.changeCase.constant(nodeType) %>:
            return convert<%= h.changeCase.pascal(nodeType) %>Node(node)