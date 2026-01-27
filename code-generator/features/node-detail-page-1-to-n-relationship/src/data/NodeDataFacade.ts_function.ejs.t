---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \},\n\}
skip_if: async getConnected<%= h.changeCase.pascal(partnerNodeType) %>Nodes
---
    },

    async getConnected<%= h.changeCase.pascal(partnerNodeType) %>Nodes(id: number) {
        return getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id)