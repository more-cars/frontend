---
inject: true
to: src/models/types/ModelNode.ts
after: ModelNode
skip_if: <%= h.changeCase.pascal(nodeType) %> |
---
    <%= h.changeCase.pascal(nodeType) %> |