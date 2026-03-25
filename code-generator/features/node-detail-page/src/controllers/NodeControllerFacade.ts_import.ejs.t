---
inject: true
to: src/controllers/<%= h.changeCase.pascal(nodeType) %>ControllerFacade.ts
before: \nexport const
skip_if: import {RedirectControllerFacade}
---
import {RedirectControllerFacade} from "./RedirectControllerFacade"