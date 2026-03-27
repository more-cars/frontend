---
inject: true
to: src/controllers/canonical/displayNode.ts
before: ControllerNodeType.IMAGE
skip_if: ControllerNodeType.<%= h.changeCase.constant(nodeType) %>
---
        case ControllerNodeType.<%= h.changeCase.constant(nodeType) %>:
            return <%= h.changeCase.pascal(nodeType) %>ControllerFacade.showNode(req, res)