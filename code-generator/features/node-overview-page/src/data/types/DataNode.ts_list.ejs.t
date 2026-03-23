---
inject: true
to: src/data/types/DataNode.ts
after: DataNode
skip_if: import type {<%= h.changeCase.pascal(nodeType) %>Node} from
---
    <%= h.changeCase.pascal(nodeType) %>Node |