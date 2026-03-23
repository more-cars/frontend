---
inject: true
to: src/models/nodes/convertDataNodeToModelNode.ts
before: ImageNode
skip_if: import {convert<%= h.changeCase.pascal(nodeType) %>Node} from
---
import {convert<%= h.changeCase.pascal(nodeType) %>Node} from "../node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/convert<%= h.changeCase.pascal(nodeType) %>Node"
import type {<%= h.changeCase.pascal(nodeType) %>Node} from "../../data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>Node"