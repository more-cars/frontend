---
inject: true
to: src/controllers/start-page/display.ts
before: import {ImageModelFacade}
skip_if: import {<%= h.changeCase.pascal(nodeType) %>ModelFacade}
---
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"