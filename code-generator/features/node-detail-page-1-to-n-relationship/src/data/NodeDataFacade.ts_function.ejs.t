---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \}\n\}
skip_if: getConnected<%= h.changeCase.pascal(partnerNodeType) %>Nodes
---
    }

    static async getConnected<%= h.changeCase.pascal(partnerNodeType) %>Nodes(id: number) {
        return getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id)