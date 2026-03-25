---
to: tests/_toolbox/fixtures/node-types/Fake<%= h.changeCase.pascal(nodeType) %>.ts
---
import {faker} from "@faker-js/faker"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {<%= h.changeCase.pascal(nodeType) %>} from "../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>"

export const Fake<%= h.changeCase.pascal(nodeType) %> = {
    model: {
        type: ModelNodeType.<%= h.changeCase.constant(nodeType) %>,
        fields: {
            id: faker.number.int({min: 12_000_000, max: 20_000_000}),
<% const properties = JSON.parse(props) -%>
<% for (prop in properties) { -%>
<%    if (properties[prop].datatype === 'string') { -%>
            <%= prop %>: faker.word.noun(),
<%    } else if (properties[prop].datatype === 'number') { -%>
            <%= prop %>: faker.number.int({min: 1000, max: 3000}),
<%    } else if (properties[prop].datatype === 'boolean') { -%>
            <%= prop %>: faker.datatype.boolean(),
<%    } -%>
<% } -%>
            created_at: faker.date.past().toISOString(),
            updated_at: faker.date.past().toISOString(),
        },
    } satisfies <%= h.changeCase.pascal(nodeType) %>,
