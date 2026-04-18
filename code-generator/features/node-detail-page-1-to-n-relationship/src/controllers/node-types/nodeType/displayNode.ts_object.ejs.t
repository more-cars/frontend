---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
after: "relationships:"
skip_if: "<%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>:"
---
            <%= h.changeCase.snake(h.inflection.pluralize(partnerNodeType)) %>: {
                items: <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>,
                node_properties: getNodeProperties(ControllerNodeType.<%= h.changeCase.constant(partnerNodeType) %>),
                thumbnails: await getNodeThumbnails(<%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %>),
            },