---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \},\n\}
skip_if: async getConnectedMainImageNode
---
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)