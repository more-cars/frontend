---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.pug
---
include ../../shared/connected-nodes-section
+connected-nodes-section(
    <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>,
    '<%= h.changeCase.title(h.inflection.pluralize(partnerNodeType)) %>',
    `The "${<%= h.changeCase.camel(nodeType) %>.name}" has the following "<%= h.changeCase.lower(h.inflection.pluralize(partnerNodeType)) %>".`,
    '<%= h.changeCase.kebab(partnerNodeType) %>',
    relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.thumbnails,
    relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.node_properties,
)
