---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \}\n\}
skip_if: findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>
---
    }

    static async getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id: number) {
        return await findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id)