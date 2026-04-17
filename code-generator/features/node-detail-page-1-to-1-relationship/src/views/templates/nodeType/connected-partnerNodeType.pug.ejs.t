---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(partnerNodeType) %>.pug
---
include ../../shared/connected-nodes-section
+connected-nodes-section(
    [<%= h.changeCase.camel(partnerNodeType) %>],
    '<%= h.changeCase.title(partnerNodeType) %>',
    `The "${<%= h.changeCase.camel(nodeType) %>.name}" has the following "<%= h.changeCase.lower(partnerNodeType) %>".`,
    relationships.<%= h.changeCase.snake(partnerNodeType) %>.thumbnails,
    relationships.<%= h.changeCase.snake(partnerNodeType) %>.node_properties,
)
