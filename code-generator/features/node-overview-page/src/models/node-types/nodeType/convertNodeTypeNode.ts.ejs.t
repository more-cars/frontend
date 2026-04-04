---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/convert<%= h.changeCase.pascal(nodeType) %>Node.ts
---
<% const properties = JSON.parse(props) -%>
import {<%= h.changeCase.pascal(nodeType) %>Node} from "../../../data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>Node"
import {<%= h.changeCase.pascal(nodeType) %>} from "./types/<%= h.changeCase.pascal(nodeType) %>"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convert<%= h.changeCase.pascal(nodeType) %>Node(dataNode: <%= h.changeCase.pascal(nodeType) %>Node) {
    const <%= h.changeCase.camel(nodeType) %>: <%= h.changeCase.pascal(nodeType) %> = {
        type: ModelNodeType.<%= h.changeCase.constant(nodeType) %>,
        fields: {
            id: dataNode.data.id,
<% properties.forEach(prop => { -%>
            <%= prop.name %>: dataNode.data.<%= prop.name %><% if(!prop.mandatory) { %> || null<% } %>,
<% }) -%>
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return <%= h.changeCase.camel(nodeType) %>
}
