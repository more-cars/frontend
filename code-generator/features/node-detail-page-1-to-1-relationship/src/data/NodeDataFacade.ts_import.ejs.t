---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \nexport const
skip_if: import {getConnected<%= h.changeCase.pascal(partnerNodeType) %>}
---
import {getConnected<%= h.changeCase.pascal(partnerNodeType) %>} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(partnerNodeType) %>"