---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.pug
---
- sectionHeadline = '<%= h.changeCase.title(h.inflection.pluralize(partnerNodeType)) %>'
- sectionIntro = `The "${<%= h.changeCase.camel(nodeType) %>.name}" has the following "<%= h.changeCase.lower(h.inflection.pluralize(partnerNodeType)) %>".`
- nodeType = '<%= h.changeCase.kebab(partnerNodeType) %>'
- nodeUrlBasePath = '<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>'
- thumbnails = relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.thumbnails
- nodeProperties = relationships.<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>.node_properties
- nodeItems = <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>
include ../../shared/connected-nodes-section
