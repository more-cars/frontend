---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
before: "\n    res.render"
skip_if: const <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getConnected
---
    const <%= h.changeCase.camel(h.inflection.pluralize(partnerNodeType)) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(<%= h.changeCase.camel(nodeType) %>Id)