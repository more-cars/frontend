---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-page.pug
---
extends ../../layouts/base/layout

block main
    - <%= h.changeCase.camel(nodeType) %> = node.data
    h1(
        aria-label="<%= h.changeCase.lower(nodeType) %> name"
        class=`text-center
        mb-8
        text-3xl
        font-bold`) #{<%= h.changeCase.camel(nodeType) %>.name}
    div(class="grid grid-cols-2 gap-4 items-start")
        div
            - item = <%= h.changeCase.camel(nodeType) %>
            include ../nodes/fact-sheet

block footer
    p Footer area...
