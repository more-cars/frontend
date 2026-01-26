---
inject: true
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
before: \nexport const
skip_if: import {findConnectedMainImage}
---
import {findConnectedMainImage} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findConnectedMainImage"