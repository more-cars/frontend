---
inject: true
to: src/controllers/start-page/display.ts
before: DataNodeType.IMAGE
skip_if: DataNodeType.<%= h.changeCase.constant(nodeType) %>
---
        getNodeTypeInformation(DataNodeType.<%= h.changeCase.constant(nodeType) %>, '🚧', await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getTotalNodeCount()),