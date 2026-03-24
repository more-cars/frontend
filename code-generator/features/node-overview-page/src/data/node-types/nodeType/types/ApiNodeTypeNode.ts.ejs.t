---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/Api<%= h.changeCase.pascal(nodeType) %>Node.ts
---
import type {ApiNodeType} from "../../../types/ApiNodeType"

<% const properties = JSON.parse(props) -%>
export type Api<%= h.changeCase.pascal(nodeType) %>Node = {
    type: ApiNodeType.<%= h.changeCase.constant(nodeType) %>
    id: number
    attributes: {
<% properties.forEach(prop => { -%>
        <%= prop.name %><% if(!prop.mandatory) { %>?<% } %>: <%= prop.datatype %>
<% }) -%>
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
