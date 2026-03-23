---
inject: true
to: src/controllers/slugs/displayNode.ts
before: import {displayNode as displayImageNode}
skip_if: import {displayNode as display<%= h.changeCase.pascal(nodeType) %>Node}
---
import {displayNode as display<%= h.changeCase.pascal(nodeType) %>Node} from "../node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode"