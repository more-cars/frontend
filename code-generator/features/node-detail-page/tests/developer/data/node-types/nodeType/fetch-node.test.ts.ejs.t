---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-node.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching <%= h.changeCase.upper(nodeType) %> node from data source', () => {
    test('when there is no <%= h.changeCase.upper(nodeType) %>', async () => {
        const responseData = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await get<%= h.changeCase.pascal(nodeType) %>ById(1))
            .toEqual(null)
    })

    test('when there is a <%= h.changeCase.upper(nodeType) %>', async () => {
        const responseData = {
            type: "<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {get<%= h.changeCase.pascal(nodeType) %>ById} = await import("../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById")
        expect(await get<%= h.changeCase.pascal(nodeType) %>ById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
