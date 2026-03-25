---
inject: true
to: tests/developer/routes/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>.test.ts
before: \ndescribe
skip_if: import type {<%= h.changeCase.pascal(nodeType) %>} from
---
import * as node from "../../../../src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {<%= h.changeCase.pascal(nodeType) %>} from "../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>"