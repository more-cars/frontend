---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-detail-page.pug
---
extends ../../node-types/detail-page

block relationships
    - <%= h.changeCase.camel(nodeType) %> = node.data
