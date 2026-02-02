---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-list.pug
---
if node_collection.length === 0
    include ../../shared/nodes-not-found-warning
    +nodes-not-found-warning("<%= h.changeCase.lower(nodeType) %>")
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
