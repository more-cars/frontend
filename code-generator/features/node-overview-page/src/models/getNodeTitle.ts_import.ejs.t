---
inject: true
to: src/models/getNodeTitle.ts
before: ImageModelFacade
skip_if: import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from
---
import {<%= h.changeCase.pascal(nodeType) %>ModelFacade} from "./<%= h.changeCase.pascal(nodeType) %>ModelFacade"