---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
after: "relationships:"
skip_if: "<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>:"
---
            <%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>: {
                items: await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(<%= h.changeCase.camel(nodeType) %>Id),
                node_properties: getNodeProperties(DataNodeType.<%= h.changeCase.constant(partnerNodeType) %>),
                thumbnails: await get<%= h.changeCase.pascal(partnerNodeType) %>Thumbnails(<%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>),
            },