---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/Api<%= h.changeCase.pascal(nodeType) %>Node.ts
---
<% const properties = JSON.parse(props) -%>
export type Api<%= h.changeCase.pascal(nodeType) %>Node = {
    data: {
        id: number
<% properties.forEach(prop => { -%>
        <%= prop.name %><% if(!prop.mandatory) { %>?<% } %>: <%= prop.datatype %>
<% }) -%>
        created_at: string
        updated_at: string
    }
}
