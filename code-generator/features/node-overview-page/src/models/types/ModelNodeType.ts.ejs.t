---
inject: true
to: src/models/types/ModelNodeType.ts
before: IMAGE
skip_if: <%= h.changeCase.constant(nodeType) %>
---
    <%= h.changeCase.constant(nodeType) %> = '<%= h.changeCase.snake(nodeType) %>',