---
inject: true
to: src/data/lib/mapApiNodeTypeToDataNodeType.ts
before: ApiNodeType.IMAGE
skip_if: ApiNodeType.<%= h.changeCase.constant(nodeType) %>
---
        [ApiNodeType.<%= h.changeCase.constant(nodeType) %>, DataNodeType.<%= h.changeCase.constant(nodeType) %>],