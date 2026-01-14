---
inject: true
to: src/data/types/DataNodeType.ts
before: IMAGE
skip_if: <%= h.changeCase.constant(nodeType) %>
---
    <%= h.changeCase.constant(nodeType) %> = '<%= h.changeCase.lower(nodeType) %>',