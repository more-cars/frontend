---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>Node.ts
---
import type {DataNodeType} from "../../../types/DataNodeType"

<% const properties = JSON.parse(props) -%>
export type <%= h.changeCase.pascal(nodeType) %>Node = {
    type: DataNodeType.<%= h.changeCase.constant(nodeType) %>
    data: {
        id: number
<% properties.forEach(prop => { -%>
        <%= prop.name %><% if(!prop.mandatory) { %>?<% } %>: <%= prop.datatype %>
<% }) -%>
        created_at: string
        updated_at: string
    }
}
