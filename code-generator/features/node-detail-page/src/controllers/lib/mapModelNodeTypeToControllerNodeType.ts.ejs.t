---
inject: true
to: src/controllers/lib/mapModelNodeTypeToControllerNodeType.ts
before: ModelNodeType.IMAGE
skip_if: ModelNodeType.<%= h.changeCase.constant(nodeType) %>
---
        [ModelNodeType.<%= h.changeCase.constant(nodeType) %>, ControllerNodeType.<%= h.changeCase.constant(nodeType) %>],