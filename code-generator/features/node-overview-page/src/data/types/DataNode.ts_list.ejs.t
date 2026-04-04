---
inject: true
to: src/data/types/DataNode.ts
after: DataNode
skip_if: "<%= h.changeCase.pascal(nodeType) %>Node "
---
    <%= h.changeCase.pascal(nodeType) %>Node |