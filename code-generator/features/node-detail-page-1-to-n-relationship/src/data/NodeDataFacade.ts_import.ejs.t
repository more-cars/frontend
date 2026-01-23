---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \nexport class
skip_if: import {getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>}
---
import {getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>"