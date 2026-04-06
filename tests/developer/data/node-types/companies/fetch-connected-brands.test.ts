import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/companies/getCompanyById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeCompany} from "../../../../_toolbox/fixtures/node-types/FakeCompany"
import {getConnectedBrands} from "../../../../../src/data/node-types/companies/getConnectedBrands"

describe('Fetching connected BRANDS from data source', () => {
    test('when there are no BRANDS connected', async () => {
        const source = FakeCompany.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getCompanyById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedBrands(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple BRANDS connected', async () => {
        const source = FakeCompany.data
        const target = {node_type: ApiNodeType.BRAND}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getCompanyById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedBrands(12345678))
            .toHaveLength(3)
    })

    test('when the COMPANY does not exist', async () => {
        vi.spyOn(node, 'getCompanyById')
            .mockImplementation(async () => null)

        expect(await getConnectedBrands(12345678))
            .toHaveLength(0)
    })
})
