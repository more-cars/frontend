import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/magazines/getMagazineById"
import {getConnectedMainImage} from "../../../../../src/data/node-types/magazines/getConnectedMainImage"
import * as api from "../../../../../src/data/requestDataFromApi"
import {FakeMagazine} from "../../../../_toolbox/fixtures/node-types/FakeMagazine"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected main IMAGE from data source', () => {
    test('when there is no main IMAGE connected', async () => {
        const source = FakeMagazine.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const source = FakeMagazine.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMainImage(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the MAGAZINE does not exist', async () => {
        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => null)

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })
})
