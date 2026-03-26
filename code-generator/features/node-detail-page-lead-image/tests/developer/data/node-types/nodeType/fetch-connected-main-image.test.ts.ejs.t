---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-connected-main-image.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"
import {Fake<%= h.changeCase.pascal(nodeType) %>} from "../../../../_toolbox/fixtures/node-types/Fake<%= h.changeCase.pascal(nodeType) %>"
import * as node from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedMainImage} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnectedMainImage"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected main IMAGE from data source', () => {
    test('when there is no main IMAGE connected', async () => {
        const source = Fake<%= h.changeCase.pascal(nodeType) %>.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'get<%= h.changeCase.pascal(nodeType) %>ById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const source = Fake<%= h.changeCase.pascal(nodeType) %>.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'get<%= h.changeCase.pascal(nodeType) %>ById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMainImage(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the <%= h.changeCase.upper(nodeType) %> does not exist', async () => {
        vi.spyOn(node, 'get<%= h.changeCase.pascal(nodeType) %>ById')
            .mockImplementation(async () => null)

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })
})
