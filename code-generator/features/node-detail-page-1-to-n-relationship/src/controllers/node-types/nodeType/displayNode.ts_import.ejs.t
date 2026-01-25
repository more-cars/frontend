---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
before: \nexport
skip_if: import {get<%= h.changeCase.pascal(partnerNodeType) %>Thumbnails} from
---
import {get<%= h.changeCase.pascal(partnerNodeType) %>Thumbnails} from "../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/get<%= h.changeCase.pascal(partnerNodeType) %>Thumbnails"