---
inject: true
to: tests/developer/routes/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>.test.ts
before: \ndescribe
skip_if: import {displayNode}
---
import {displayNode} from "../../../../src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode"