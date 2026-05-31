---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(partnerNodeType) %>.pug
---
include ../../shared/connected-nodes-section
- introTextParts = []
- introTextParts.push(`The "${<%= h.changeCase.camel(nodeType) %>.name}" has the following "<%= h.changeCase.lower(partnerNodeType) %>".`)
+connected-nodes-section(
    [<%= h.changeCase.camel(partnerNodeType) %>.item],
    '<%= h.changeCase.title(partnerNodeType) %>',
    introTextParts.join(' '),
    <%= h.changeCase.camel(partnerNodeType) %>.thumbnails,
    <%= h.changeCase.camel(partnerNodeType) %>.node_properties,
)
