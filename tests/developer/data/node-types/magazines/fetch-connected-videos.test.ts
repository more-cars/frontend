import {describe, expect, test, vi} from "vitest"
import {FakeMagazine} from "../../../../_toolbox/fixtures/node-types/FakeMagazine"
import * as node from "../../../../../src/data/node-types/magazines/getMagazineById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedVideos} from "../../../../../src/data/node-types/magazines/getConnectedVideos"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected VIDEOS from data source', () => {
    test('when there are no VIDEOS connected', async () => {
        const source = FakeMagazine.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple VIDEOS connected', async () => {
        const source = FakeMagazine.data
        const target = {node_type: ApiNodeType.VIDEO}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedVideos(12345678))
            .toHaveLength(3)
    })

    test('when the MAGAZINE does not exist', async () => {
        vi.spyOn(node, 'getMagazineById')
            .mockImplementation(async () => null)

        expect(await getConnectedVideos(12345678))
            .toHaveLength(0)
    })
})
