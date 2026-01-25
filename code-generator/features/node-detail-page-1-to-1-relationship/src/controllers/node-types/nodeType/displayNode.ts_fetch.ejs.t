---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
before: templates/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/<%= h.changeCase.kebab(nodeType) %>-page
skip_if: const <%= h.changeCase.camel(partnerNodeType) %>
---
    const <%= h.changeCase.camel(partnerNodeType) %> = await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getConnected<%= h.changeCase.pascal(partnerNodeType) %>(<%= h.changeCase.camel(nodeType) %>Id)