---
inject: true
to: src/data/types/DataRelationshipType.ts
before: IMAGE_BELONGS_TO_NODE
skip_if: <%= h.changeCase.constant(nodeType) %>_<%= h.changeCase.constant(relationshipName) %>
---
    <%= h.changeCase.constant(nodeType) %>_<%= h.changeCase.constant(relationshipName) %> = '<%= h.changeCase.lower(relationshipName) %>',