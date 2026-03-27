---
inject: true
to: src/controllers/canonical/displayNode.ts
before: ImageControllerFacade
skip_if: import {<%= h.changeCase.pascal(nodeType) %>ControllerFacade} from
---
import {<%= h.changeCase.pascal(nodeType) %>ControllerFacade} from "../<%= h.changeCase.pascal(nodeType) %>ControllerFacade"