---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \},\n\}
skip_if: async getConnectedMainImage
---
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)