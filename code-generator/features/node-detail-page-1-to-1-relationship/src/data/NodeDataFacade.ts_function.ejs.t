---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \}\n\}
skip_if: getConnected<%= h.changeCase.pascal(partnerNodeType) %>Node
---
    }

    static async getConnected<%= h.changeCase.pascal(partnerNodeType) %>Node(id: number) {
        return getConnected<%= h.changeCase.pascal(partnerNodeType) %>(id)