---
inject: true
to: src/controllers/types/ControllerNodeType.ts
before: IMAGE
skip_if: <%= h.changeCase.constant(nodeType) %>
---
    <%= h.changeCase.constant(nodeType) %> = '<%= h.changeCase.kebab(nodeType) %>',