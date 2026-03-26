import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/lap-times/getLapTimeById"
import {getConnectedMainImage} from "../../../../../src/data/node-types/lap-times/getConnectedMainImage"
import * as api from "../../../../../src/data/requestDataFromApi"
import {FakeLapTime} from "../../../../_toolbox/fixtures/node-types/FakeLapTime"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected main IMAGE from data source', () => {
    test('when there is no main IMAGE connected', async () => {
        const source = FakeLapTime.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getLapTimeById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const source = FakeLapTime.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getLapTimeById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMainImage(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the LAP TIME does not exist', async () => {
        vi.spyOn(node, 'getLapTimeById')
            .mockImplementation(async () => null)

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })
})
