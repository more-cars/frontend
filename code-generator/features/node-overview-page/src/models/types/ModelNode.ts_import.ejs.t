---
inject: true
to: src/models/types/ModelNode.ts
before: Image
skip_if: import type {<%= h.changeCase.pascal(nodeType) %>} from
---
import type {<%= h.changeCase.pascal(nodeType) %>} from "../node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>"