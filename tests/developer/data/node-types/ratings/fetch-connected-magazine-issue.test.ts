import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/ratings/getRatingById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeRating} from "../../../../_toolbox/fixtures/node-types/FakeRating"
import {getConnectedMagazineIssue} from "../../../../../src/data/node-types/ratings/getConnectedMagazineIssue"

describe('Fetching connected MAGAZINE ISSUE from data source', () => {
    test('when there is no MAGAZINE ISSUE connected', async () => {
        const source = FakeRating.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getRatingById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMagazineIssue(12345678))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE connected', async () => {
        const source = FakeRating.data
        const target = {node_type: ApiNodeType.MAGAZINE_ISSUE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getRatingById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMagazineIssue(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the RATING does not exist', async () => {
        vi.spyOn(node, 'getRatingById')
            .mockImplementation(async () => null)

        expect(await getConnectedMagazineIssue(12345678))
            .toEqual(null)
    })
})
