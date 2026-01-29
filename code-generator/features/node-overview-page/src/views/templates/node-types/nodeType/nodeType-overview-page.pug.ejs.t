---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-overview-page.pug
---
extends ../../node-types/overview-page

block node-list
    include <%= h.changeCase.kebab(nodeType) %>-list
