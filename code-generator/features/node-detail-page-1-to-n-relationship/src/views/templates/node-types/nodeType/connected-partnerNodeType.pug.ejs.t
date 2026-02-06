---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.pug
---
if <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.length > 0
    section(data-testid="<%= h.changeCase.kebab(partnerNodeType) %>-section" class="mb-8")
        h2(class="text-2xl mb-2 border-b-2 border-lime-500") <%= h.changeCase.title(h.inflection.pluralize(partnerNodeType)) %>
        p(class="mb-4") The <%= h.changeCase.lower(nodeType) %> #[b #{<%= h.changeCase.camel(nodeType) %>.name}] has the following #{<%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.length} <%= h.changeCase.lower(h.inflection.pluralize(partnerNodeType)) %>:

        ul
            each nodeItem in <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>
                - nodeType = '<%= h.changeCase.kebab(partnerNodeType) %>'
                - nodeUrlPath = '<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/' + nodeItem.id
                - thumbnail = relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.thumbnails.get(nodeItem.id)
                - nodeProperties = relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.node_properties
                include ../../shared/list-node-item
