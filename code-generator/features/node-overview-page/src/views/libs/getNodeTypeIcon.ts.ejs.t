---
inject: true
to: src/views/libs/getNodeTypeIcon.ts
before: ControllerNodeType.IMAGE
skip_if: ControllerNodeType. <%= h.changeCase.constant(nodeType) %>
---
        [ControllerNodeType. <%= h.changeCase.constant(nodeType) %>, '🚧'],