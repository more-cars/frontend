---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \}\n\}
skip_if: getNodeById
---
    }

    static async getNodeById(id: number) {
        return get<%= h.changeCase.pascal(nodeType) %>ById(id)