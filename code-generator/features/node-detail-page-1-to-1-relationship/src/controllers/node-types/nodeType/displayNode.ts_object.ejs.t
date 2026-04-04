---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
after: "relationships:"
skip_if: "<%= h.changeCase.snake(partnerNodeType) %>:"
---
            <%= h.changeCase.snake(partnerNodeType) %>: {
                item: <%= h.changeCase.camel(partnerNodeType) %>,
                node_properties: getNodeProperties(DataNodeType.<%= h.changeCase.constant(partnerNodeType) %>),
                thumbnails: await getNodeThumbnails(<%= h.changeCase.camel(partnerNodeType) %> ? [<%= h.changeCase.camel(partnerNodeType) %>] : []),
            },