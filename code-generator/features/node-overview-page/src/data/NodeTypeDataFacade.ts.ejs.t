---
to: src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade.ts
---
import {getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>"

export const <%= h.changeCase.pascal(nodeType) %>DataFacade = {
    async getNodeCollection() {
        return getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>()
    },
}
