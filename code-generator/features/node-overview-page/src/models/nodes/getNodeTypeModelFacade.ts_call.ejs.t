---
inject: true
to: src/models/nodes/getNodeTypeModelFacade.ts
before: ModelNodeType.IMAGE
skip_if: ModelNodeType.<%= h.changeCase.constant(nodeType) %>
---
        [ModelNodeType.<%= h.changeCase.constant(nodeType) %>, <%= h.changeCase.pascal(nodeType) %>ModelFacade as ModelFacade],