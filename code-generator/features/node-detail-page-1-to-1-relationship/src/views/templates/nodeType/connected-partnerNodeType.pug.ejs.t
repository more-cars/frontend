---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(partnerNodeType) %>.pug
---
if <%= h.changeCase.camel(partnerNodeType) %>
    section(data-testid="<%= h.changeCase.kebab(partnerNodeType) %>-section" class="mb-8")
        h2(class="text-2xl mb-2") <%= h.changeCase.title(partnerNodeType) %>
        p(class="mb-4") The <%= h.changeCase.lower(nodeType) %> #[b #{item.name}] belongs to the following <%= h.changeCase.lower(partnerNodeType) %>:

        div(class="mb-4 bg-stone-100 rounded-md inset-shadow-sm")
            div(class="grid grid-flow-col grid-cols-4 gap-4" data-testid=`<%= h.changeCase.kebab(partnerNodeType) %>-${<%= h.changeCase.camel(partnerNodeType) %>.id}`)
                - thumbnail = relationships.<%= h.changeCase.snake(partnerNodeType) %>.thumbnails.get(<%= h.changeCase.camel(partnerNodeType) %>.id)
                include ../nodes/thumbnail
                div(class="col-span-3")
                    a(class="inline-block font-bold text-lg my-2 underline hover:no-underline" href=`/<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/${<%= h.changeCase.camel(partnerNodeType) %>.id}`)
                        span(aria-label="name") #{<%= h.changeCase.camel(partnerNodeType) %>.name}
                    - item = <%= h.changeCase.camel(partnerNodeType) %>
                    - nodeProperties = relationships.<%= h.changeCase.snake(partnerNodeType) %>.node_properties
                    include ../nodes/primary-properties
