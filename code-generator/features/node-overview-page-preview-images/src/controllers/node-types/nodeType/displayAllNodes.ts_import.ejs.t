---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
before: \nexport
skip_if: import {get<%= h.changeCase.pascal(nodeType) %>Thumbnails}
---
import {get<%= h.changeCase.pascal(nodeType) %>Thumbnails} from "./get<%= h.changeCase.pascal(nodeType) %>Thumbnails"