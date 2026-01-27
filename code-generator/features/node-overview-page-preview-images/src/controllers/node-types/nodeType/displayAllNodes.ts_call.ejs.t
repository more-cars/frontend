---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
after: nodeCollection
skip_if: await get<%= h.changeCase.pascal(nodeType) %>Thumbnails
---
        thumbnails: await get<%= h.changeCase.pascal(nodeType) %>Thumbnails(<%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>),