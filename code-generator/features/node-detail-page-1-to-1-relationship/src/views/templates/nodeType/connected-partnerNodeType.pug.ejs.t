---
to: src/views/templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(partnerNodeType) %>.pug
---
if <%= h.changeCase.camel(partnerNodeType) %>
    section(data-testid="<%= h.changeCase.kebab(partnerNodeType) %>-section" class="mb-8")
        h2(class="text-2xl mb-2") <%= h.changeCase.title(partnerNodeType) %>
        p(class="mb-4") The <%= h.changeCase.lower(nodeType) %> #[b #{<%= h.changeCase.camel(partnerNodeType) %>.name}] belongs to the following <%= h.changeCase.lower(partnerNodeType) %>:

        ul
            - nodeItem = <%= h.changeCase.camel(partnerNodeType) %>
            - nodeType = '<%= h.changeCase.kebab(partnerNodeType) %>'
            - nodeUrlPath = '<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/' + nodeItem.id
            - thumbnail = relationships.<%= h.changeCase.snake(partnerNodeType) %>.thumbnails.get(nodeItem.id)
            - nodeProperties = relationships.<%= h.changeCase.snake(partnerNodeType) %>.node_properties
            include ../../shared/list-node-item
