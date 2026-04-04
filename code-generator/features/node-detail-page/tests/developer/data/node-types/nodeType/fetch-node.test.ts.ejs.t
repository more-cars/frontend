---
to: tests/developer/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/fetch-node.test.ts
---
import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "../../../../../src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiMagazineNode} from "../../../../../src/data/node-types/magazines/types/ApiMagazineNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {MagazineNode} from "../../../../../src/data/node-types/magazines/types/MagazineNode"

describe('Fetching <%= h.changeCase.upper(nodeType) %> node from data source', () => {
    test('when there is no <%= h.changeCase.upper(nodeType) %>', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await get<%= h.changeCase.pascal(nodeType) %>ById(1))
            .toEqual(null)
    })

    test('when there is a <%= h.changeCase.upper(nodeType) %>', async () => {
        const apiResponse = {
            type: ApiNodeType.<%= h.changeCase.constant(nodeType) %>,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as Api<%= h.changeCase.pascal(nodeType) %>Node

        const expectedDataNode = {
            type: DataNodeType.<%= h.changeCase.constant(nodeType) %>,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as <%= h.changeCase.pascal(nodeType) %>Node

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await get<%= h.changeCase.pascal(nodeType) %>ById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
