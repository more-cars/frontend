import {afterEach, describe, expect, test, vi} from "vitest"
import {FakeBrand} from "../../../../_toolbox/fixtures/node-types/FakeBrand"
import * as node from "../../../../../src/data/node-types/brands/getBrandById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedCompany} from "../../../../../src/data/node-types/brands/getConnectedCompany"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected COMPANY from data source', () => {
    test('when there is no COMPANY connected', async () => {
        const source = FakeBrand.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getBrandById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCompany(12345678))
            .toEqual(null)
    })

    test('when there is a COMPANY connected', async () => {
        const source = FakeBrand.data
        const target = {node_type: ApiNodeType.COMPANY, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getBrandById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCompany(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the BRAND does not exist', async () => {
        vi.spyOn(node, 'getBrandById')
            .mockImplementation(async () => null)

        expect(await getConnectedCompany(12345678))
            .toEqual(null)
    })
})
