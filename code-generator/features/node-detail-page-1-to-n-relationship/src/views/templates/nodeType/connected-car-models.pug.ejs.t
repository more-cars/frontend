---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.pug
---
if <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.length > 0
    section
        h2(class="text-2xl mb-4 text-center") <%= h.changeCase.title(h.inflection.pluralize(partnerNodeType)) %>
            span  (#{<%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.length})

        ul(
            class="m-auto"
            aria-label="List of all <%= h.changeCase.title(h.inflection.pluralize(partnerNodeType)) %> that are attached to the <%= h.changeCase.title(nodeType) %>"
            data-testid="<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>-list"
        )
            each item in <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>
                li(class="mb-4 bg-stone-100 rounded-md inset-shadow-sm" data-testid=`<%= h.changeCase.kebab(partnerNodeType) %>-${item.id}`)
                    div(class="grid grid-flow-col grid-cols-4 gap-4")
                        include ../nodes/thumbnail
                        div(class="col-span-3")
                            a(class="inline-block font-bold text-xl mt-3 underline" href=`/<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/${item.id}`)
                                span(aria-label="name") #{item.name}
                            if item.internal_code
                                span(aria-label="internal code")  (#{item.internal_code})
                            - primaryProperties = relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.primary_properties
                            include ../nodes/primary-properties
