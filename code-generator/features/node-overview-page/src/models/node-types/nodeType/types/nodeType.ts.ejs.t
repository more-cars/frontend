---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>.ts
---
import {ModelNodeType} from "../../../types/ModelNodeType"

<% const properties = JSON.parse(props) -%>
export type <%= h.changeCase.pascal(nodeType) %> = {
    type: ModelNodeType.<%= h.changeCase.constant(nodeType) %>
    fields: {
        id: number
<% properties.forEach(prop => { -%>
        <%= prop.name %>: <%= prop.datatype %><% if(!prop.mandatory) { %> | null<% } %>
<% }) -%>
        created_at: string
        updated_at: string
    }
}
