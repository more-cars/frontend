---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \},\n\}
skip_if: async getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>
---
    },

    async getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id: number) {
        return await findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id)