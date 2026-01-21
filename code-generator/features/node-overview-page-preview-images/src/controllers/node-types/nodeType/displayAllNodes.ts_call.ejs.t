---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
after: nodeCollection
skip_if: await getThumbnails
---
        thumbnails: await getThumbnails(<%= h.changeCase.camel(h.inflection.pluralize(nodeType)) %>),