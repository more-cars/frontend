---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-list-item.pug
---
li(aria-label="<%= h.changeCase.lower(nodeType) %>" class="mb-4 bg-stone-100 rounded-md inset-shadow-sm" data-testid=`<%= h.changeCase.kebab(nodeType) %>-${item.id}`)
    div(class="grid grid-flow-col grid-cols-4 gap-4")
        include ../nodes/thumbnail
        div(class="col-span-3")
            a(class="inline-block font-bold text-xl mt-3 underline" href=`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${item.id}`)
                span(aria-label="name") #{item.name}
            include ../nodes/primary-properties
