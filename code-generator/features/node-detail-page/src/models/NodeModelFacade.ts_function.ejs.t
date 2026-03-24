---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \},\n\}
skip_if: async getNodeById
---
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeSubTitle(node: <%= h.changeCase.pascal(nodeType) %>) {
        return getNodeSubTitle(node)