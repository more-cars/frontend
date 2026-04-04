---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes.ts
before: getNodeProperties
skip_if: import {getNodeThumbnails} from
---
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"