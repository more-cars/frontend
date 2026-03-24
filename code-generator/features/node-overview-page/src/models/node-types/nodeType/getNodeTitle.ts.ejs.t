---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getNodeTitle.ts
---
import type {<%= h.changeCase.pascal(nodeType) %>} from "./types/<%= h.changeCase.pascal(nodeType) %>"

export function getNodeTitle(node: <%= h.changeCase.pascal(nodeType) %>) {
    return `${node.name}`
}
