---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> from data source', () => {
    test('when there are no <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>")
        expect(await getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(1))
            .toHaveLength(0)
    })

    test('when there are multiple <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>")
        expect(await getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(1))
            .toHaveLength(3)
    })
})
