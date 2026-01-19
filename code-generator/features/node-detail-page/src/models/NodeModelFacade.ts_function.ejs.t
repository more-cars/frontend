---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \}\n\}
skip_if: getNodeById
---
    }

    static async getNodeById(id: number) {
        return findNodeById(id)