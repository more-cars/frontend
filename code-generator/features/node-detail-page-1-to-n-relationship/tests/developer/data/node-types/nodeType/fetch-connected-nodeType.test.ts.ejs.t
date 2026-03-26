---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-connected-<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>.test.ts
---
import {afterEach, describe, expect, test, vi} from "vitest"
import {Fake<%= h.changeCase.pascal(nodeType) %>} from "../../../../_toolbox/fixtures/node-types/Fake<%= h.changeCase.pascal(nodeType) %>"
import * as node from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching connected <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> from data source', () => {
    test('when there are no <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> connected', async () => {
        const source = Fake<%= h.changeCase.pascal(nodeType) %>.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'get<%= h.changeCase.pascal(nodeType) %>ById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple <%= h.changeCase.upper(h.inflection.pluralize(partnerNodeType)) %> connected', async () => {
        const source = Fake<%= h.changeCase.pascal(nodeType) %>.data
        const target = {node_type: ApiNodeType.<%= h.changeCase.constant(partnerNodeType) %>}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'get<%= h.changeCase.pascal(nodeType) %>ById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(12345678))
            .toHaveLength(3)
    })

    test('when the <%= h.changeCase.upper(nodeType) %> does not exist', async () => {
        vi.spyOn(node, 'get<%= h.changeCase.pascal(nodeType) %>ById')
            .mockImplementation(async () => null)

        expect(await getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(12345678))
            .toHaveLength(0)
    })
})
