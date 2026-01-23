---
to: tests/developer/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get-connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.test.ts
---
import {describe, expect, test, vi} from "vitest"
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../../../src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>} from "../../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>"
import {<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"

describe('Collect connected <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> for the <%= h.changeCase.upper(nodeType) %> detail page', () => {
    test('when no <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> are connected', async () => {
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getConnected<%= h.changeCase.pascal(partnerNodeType) %>Nodes').mockResolvedValue([])

        expect(await findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(1))
            .toHaveLength(0)
    })

    test('when there are <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> connected', async () => {
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getConnected<%= h.changeCase.pascal(partnerNodeType) %>Nodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as <%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as <%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship,
        ])

        expect(await findConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(1))
            .toHaveLength(2)
    })
})
