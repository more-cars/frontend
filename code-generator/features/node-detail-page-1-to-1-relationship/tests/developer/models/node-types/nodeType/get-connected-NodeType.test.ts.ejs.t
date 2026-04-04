---
to: tests/developer/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get-connected-<%= h.changeCase.kebab(partnerNodeType) %>.test.ts
---
import {describe, expect, test, vi} from "vitest"
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../../../src/data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {findConnected<%= h.changeCase.pascal(partnerNodeType) %>} from "../../../../../src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findConnected<%= h.changeCase.pascal(partnerNodeType) %>"
import {Fake<%= h.changeCase.pascal(partnerNodeType) %>} from "../../../../_toolbox/fixtures/node-types/Fake<%= h.changeCase.pascal(partnerNodeType) %>"
import {<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"

describe('Collect connected <%= h.changeCase.upper(partnerNodeType) %> for the <%= h.changeCase.upper(nodeType) %> detail page', () => {
    test('when no <%= h.changeCase.upper(partnerNodeType) %> is connected', async () => {
        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getConnected<%= h.changeCase.pascal(partnerNodeType) %>Node').mockResolvedValue(null)

        expect(await findConnected<%= h.changeCase.pascal(partnerNodeType) %>(12345678))
            .toEqual(null)
    })

    test('when there is a <%= h.changeCase.upper(partnerNodeType) %> connected', async () => {
        const data = {partner_node: {id: 11111118, name: "dummy", partner_node: Fake<%= h.changeCase.pascal(partnerNodeType) %>.data}} as unknown as <%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship

        vi.spyOn(<%= h.changeCase.pascal(nodeType) %>DataFacade, 'getConnected<%= h.changeCase.pascal(partnerNodeType) %>Node').mockResolvedValue(data)

        expect(await findConnected<%= h.changeCase.pascal(partnerNodeType) %>(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
