---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-node-collection.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching <%= h.changeCase.upper(nodeType) %> collection from data source', () => {
    test('when there are no <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>")
        expect(await getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>())
            .toHaveLength(0)
    })

    test('when there are multiple <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>")
        expect(await getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>")
        expect(await getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>())
            .toHaveLength(0)
    })
})
