---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/properties.json
---
<% const properties = JSON.parse(props) -%>
<%- JSON.stringify(properties, null, 2) %>
