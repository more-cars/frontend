---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \}\n\}
skip_if: getConnectedMainImage
---
    }

    static async getConnectedMainImage(id: number) {
        return await findConnectedMainImage(id)