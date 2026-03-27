---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-node-collection.test.ts
---
import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {Api<%= h.changeCase.pascal(nodeType) %>Node} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/Api<%= h.changeCase.pascal(nodeType) %>Node"

describe('Fetching <%= h.changeCase.upper(nodeType) %> collection from data source', () => {
    test('when there are no <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>())
            .toHaveLength(0)
    })

    test('when there are multiple <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>', async () => {
        const node = {type: ApiNodeType.<%= h.changeCase.constant(nodeType) %>} as Api<%= h.changeCase.pascal(nodeType) %>Node
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>())
            .toHaveLength(0)
    })
})
