---
to: src/views/templates/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/connected-<%= h.changeCase.kebab(partnerNodeType) %>.pug
---
- sectionHeadline = '<%= h.changeCase.title(partnerNodeType) %>'
- sectionIntro = `The "${<%= h.changeCase.camel(nodeType) %>.name}" has the following "<%= h.changeCase.lower(partnerNodeType) %>".`
- nodeType = '<%= h.changeCase.kebab(partnerNodeType) %>'
- nodeUrlBasePath = '<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>'
- thumbnails = relationships.<%= h.changeCase.snake(partnerNodeType) %>.thumbnails
- nodeProperties = relationships.<%= h.changeCase.snake(partnerNodeType) %>.node_properties
- nodeItems = [<%= h.changeCase.camel(partnerNodeType) %>]
include ../../shared/connected-nodes-section
