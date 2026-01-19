---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \nexport class
skip_if: import {findNodeById}
---
import {findNodeById} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findNodeById"