---
inject: true
to: src/controllers/<%= h.changeCase.pascal(nodeType) %>ControllerFacade.ts
before: \nexport const
skip_if: import {displayNode}
---
import {displayNode} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode"