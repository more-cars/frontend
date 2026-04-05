---
inject: true
to: src/models/getNodeTitle.ts
before: ModelNodeType.IMAGE
skip_if: ModelNodeType.<%= h.changeCase.constant(nodeType) %>
---
        case ModelNodeType.<%= h.changeCase.constant(nodeType) %>:
            return <%= h.changeCase.pascal(nodeType) %>ModelFacade.getNodeTitle(node)