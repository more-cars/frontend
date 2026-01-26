---
inject: true
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
before: \nexport const
skip_if: import {getConnectedMainImage}
---
import {getConnectedMainImage} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnectedMainImage"