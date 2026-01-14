---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>-page.pug
---
extends ../../layouts/base/layout

block main
    h1(class=`
        text-center
        mb-8
        text-3xl
        font-bold
        underline`) All <%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>
    include <%= h.changeCase.kebab(nodeType) %>-list

block footer
    p Footer area...
