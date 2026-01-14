---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/convert<%= h.changeCase.pascal(nodeType) %>Node.ts
---
<% const properties = JSON.parse(props) -%>
import {<%= h.changeCase.pascal(nodeType) %>Node} from "../../../data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>Node"
import {<%= h.changeCase.pascal(nodeType) %>} from "./types/<%= h.changeCase.pascal(nodeType) %>"

export function convert<%= h.changeCase.pascal(nodeType) %>Node(dataNode: <%= h.changeCase.pascal(nodeType) %>Node) {
    const <%= h.changeCase.camel(nodeType) %>: <%= h.changeCase.pascal(nodeType) %> = {
        id: dataNode.id,
<% properties.forEach(prop => { -%>
        <%= prop.name %>: dataNode.<%= prop.name %><% if(!prop.mandatory) { %> || null<% } %>,
<% }) -%>
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return <%= h.changeCase.camel(nodeType) %>
}
