---
inject: true
to: src/controllers/start-page/getAllNodeTypeInformation.ts
before: ControllerNodeType.IMAGE
skip_if: ControllerNodeType.<%= h.changeCase.constant(nodeType) %>
---
        [ControllerNodeType.<%= h.changeCase.constant(nodeType) %>, getNodeTypeInformation(DataNodeType.<%= h.changeCase.constant(nodeType) %>, await <%= h.changeCase.pascal(nodeType) %>ModelFacade.getTotalNodeCount())],