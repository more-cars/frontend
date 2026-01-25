---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.pug
---
if <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.length > 0
    section(data-testid="<%= h.changeCase.kebab(partnerNodeType) %>-section" class="mb-8")
        h2(class="text-2xl mb-2") <%= h.changeCase.title(h.inflection.pluralize(partnerNodeType)) %>
        p(class="mb-4") The <%= h.changeCase.lower(nodeType) %> #[b #{<%= h.changeCase.camel(partnerNodeType) %>.name}] has the following #{<%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.length} <%= h.changeCase.lower(h.inflection.pluralize(partnerNodeType)) %>:
        ul
            each <%= h.changeCase.camel(partnerNodeType) %> in <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>
                li(class="mb-4 bg-stone-100 rounded-md inset-shadow-sm" data-testid=`<%= h.changeCase.kebab(partnerNodeType) %>-${<%= h.changeCase.camel(partnerNodeType) %>.id}`)
                    div(class="grid grid-flow-col grid-cols-4 gap-4")
                        - thumbnail = relationships.<%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.thumbnails.get(<%= h.changeCase.camel(partnerNodeType) %>.id)
                        include ../nodes/thumbnail
                        div(class="col-span-3")
                            a(class="inline-block font-bold text-lg my-2 underline hover:no-underline" href=`/<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/${<%= h.changeCase.camel(partnerNodeType) %>.id}`)
                                span(aria-label="name") #{<%= h.changeCase.camel(partnerNodeType) %>.name}
                            - nodeProperties = relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.node_properties
                            include ../nodes/primary-properties
