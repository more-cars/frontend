---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected <%= h.changeCase.upper(partnerNodeType) %> from data source', () => {
    test('when there is no <%= h.changeCase.upper(partnerNodeType) %> connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById", () => ({
            get<%= h.changeCase.pascal(nodeType) %>ById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnected<%= h.changeCase.pascal(partnerNodeType) %>} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(partnerNodeType) %>")
        expect(await getConnected<%= h.changeCase.pascal(partnerNodeType) %>(1))
            .toEqual(null)
    })

    test('when there is a <%= h.changeCase.upper(partnerNodeType) %> connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnected<%= h.changeCase.pascal(partnerNodeType) %>} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(partnerNodeType) %>")
        expect(await getConnected<%= h.changeCase.pascal(partnerNodeType) %>(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the <%= h.changeCase.upper(nodeType) %> does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById", () => ({
            get<%= h.changeCase.pascal(nodeType) %>ById: vi.fn(() => null)
        }))

        const {getConnected<%= h.changeCase.pascal(partnerNodeType) %>} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(partnerNodeType) %>")
        expect(await getConnected<%= h.changeCase.pascal(partnerNodeType) %>(1))
            .toEqual(null)
    })
})
