---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-list-item.pug
---
li(class="mb-4 bg-zinc-100 border-1 border-zinc-200 rounded-md" data-testid=`<%= h.changeCase.kebab(nodeType) %>-${item.id}`)
    div(class="grid grid-flow-col grid-cols-4 gap-4")
        - thumbnail = thumbnails.get(item.id)
        include ../nodes/thumbnail
        div(class="col-span-3")
            a(class="inline-block font-bold text-lg my-2 underline hover:no-underline" href=`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${item.id}`)
                span(aria-label="name") #{item.name}
            - nodeProperties = node_properties
            include ../nodes/primary-properties
