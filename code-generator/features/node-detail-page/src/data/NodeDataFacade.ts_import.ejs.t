---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \nexport const
skip_if: import {get<%= h.changeCase.pascal(nodeType) %>ById}
---
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById"