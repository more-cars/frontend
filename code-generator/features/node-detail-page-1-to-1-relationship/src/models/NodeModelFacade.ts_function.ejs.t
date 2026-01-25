---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \}\n\}
skip_if: findConnected<%= h.changeCase.pascal(partnerNodeType) %>
---
    }

    static async getConnected<%= h.changeCase.pascal(partnerNodeType) %>(id: number) {
        return await findConnected<%= h.changeCase.pascal(partnerNodeType) %>(id)