---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getNodeSubTitle.ts
---
import type {<%= h.changeCase.pascal(nodeType) %>} from "./types/<%= h.changeCase.pascal(nodeType) %>"

export function getNodeSubTitle(node: <%= h.changeCase.pascal(nodeType) %>) {
    return `${node.fields.name}`
}
