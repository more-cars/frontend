---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.pug
---
include ../../shared/connected-nodes-section
- introTextParts = []
- introTextParts.push(`The "${<%= h.changeCase.camel(nodeType) %>.name}" has the following "<%= h.changeCase.lower(h.inflection.pluralize(partnerNodeType)) %>".`)
+connected-nodes-section(
    <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.items,
    '<%= h.changeCase.title(h.inflection.pluralize(partnerNodeType)) %>',
    introTextParts.join(' '),
    <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.thumbnails,
    <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>.node_properties,
)
