---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-not-found-page.pug
---
extends ../../../layouts/base/layout

block main
    include ../../shared/node-not-found-warning
    +node-not-found-warning("<%= h.changeCase.lower(nodeType) %>")

block footer
    p Footer area...
