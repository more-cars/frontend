---
inject: true
to: src/controllers/slugs/displayNode.ts
before: ControllerNodeType.IMAGE
skip_if: ControllerNodeType.<%= h.changeCase.constant(nodeType) %>
---
        case ControllerNodeType.<%= h.changeCase.constant(nodeType) %>:
            return display<%= h.changeCase.pascal(nodeType) %>Node(req, res)