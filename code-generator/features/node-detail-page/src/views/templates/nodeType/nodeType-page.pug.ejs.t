---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-page.pug
---
extends ../../layouts/base/layout

block main
    - <%= h.changeCase.camel(nodeType) %> = node.data
    div(class="grid grid-cols-2 gap-8 items-start")
        div(data-testid="main-area-primary")
            h1(class=`text-left mb-1 text-3xl font-bold`) #{<%= h.changeCase.camel(nodeType) %>.name}
            div(class="mb-4 text-sm") ...

            - item = <%= h.changeCase.camel(nodeType) %>
            include ../nodes/fact-sheet

        div(data-testid="main-area-secondary")

block footer
    p Footer area...
