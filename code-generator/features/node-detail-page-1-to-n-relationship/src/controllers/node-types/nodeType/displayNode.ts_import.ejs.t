---
inject: true
to: src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode.ts
before: \nexport
skip_if: import {getNodeThumbnails} from
---
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"