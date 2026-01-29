---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-list.pug
---
if node_collection.length === 0
    div(
        class="max-w-160 m-auto p-4 bg-orange-100 border-l-4 border-orange-500 text-orange-700"
        data-testid="<%= h.changeCase.kebab(nodeType) %>-list-empty"
    )
        p(class="font-bold") No <%= h.changeCase.lower(h.inflection.pluralize(nodeType)) %>
        p No <%= h.changeCase.lower(h.inflection.pluralize(nodeType)) %> were found. Either there are none or this is a temporary issue. Please try again later.
else
    section(data-testid="<%= h.changeCase.kebab(nodeType) %>-section")
        ul(class="grid lg:grid-cols-2 gap-x-8 gap-y-2")
            each nodeItem in node_collection
                - nodeType = '<%= h.changeCase.kebab(nodeType) %>'
                - nodeUrlPath = '<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/' + nodeItem.id
                - nodeProperties = node_properties
                include ../../shared/list-node-item

    include ../../shared/pagination
    +pagination('<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>', pagination.page, pagination.total)
