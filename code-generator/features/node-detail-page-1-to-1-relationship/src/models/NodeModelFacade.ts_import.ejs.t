---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \nexport const
skip_if: import {findConnected<%= h.changeCase.pascal(partnerNodeType) %>}
---
import {findConnected<%= h.changeCase.pascal(partnerNodeType) %>} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findConnected<%= h.changeCase.pascal(partnerNodeType) %>"