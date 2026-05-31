---
inject: true
to: src/controllers/start-page/getAllNodeTypeInformation.ts
before: ImageModelFacade
skip_if: import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from
---
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "../../models/<%= h.changeCase.pascal(nodeType) %>ModelFacade"