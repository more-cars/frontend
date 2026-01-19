---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-node.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching <%= h.changeCase.upper(nodeType) %> node from data source', () => {
    test('when there is no <%= h.changeCase.upper(nodeType) %>', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {get<%= h.changeCase.pascal(nodeType) %>ById} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById")
        expect(await get<%= h.changeCase.pascal(nodeType) %>ById(1))
            .toEqual(null)
    })

    test('when there is a <%= h.changeCase.upper(nodeType) %>', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {get<%= h.changeCase.pascal(nodeType) %>ById} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById")
        expect(await get<%= h.changeCase.pascal(nodeType) %>ById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
