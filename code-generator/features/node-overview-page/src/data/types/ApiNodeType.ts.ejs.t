---
inject: true
to: src/data/types/ApiNodeType.ts
before: IMAGE
skip_if: <%= h.changeCase.constant(nodeType) %>
---
    <%= h.changeCase.constant(nodeType) %> = '<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>',