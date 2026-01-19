---
inject: true
to: src/controllers/<%= h.changeCase.pascal(nodeType) %>ControllerFacade.ts
before: \}\n\}
skip_if: await displayNode
---
    }

    static async showNode(req: express.Request, res: express.Response) {
        await displayNode(req, res)