---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
after: "nodeProperties: getNodeProperties"
skip_if: main_image
---
            main_image: await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getConnectedMainImage(<%= h.changeCase.camel(nodeType) %>Id),