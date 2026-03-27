import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getCompanyById} from "../../../../../src/data/node-types/companies/getCompanyById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiCompanyNode} from "../../../../../src/data/node-types/companies/types/ApiCompanyNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {CompanyNode} from "../../../../../src/data/node-types/companies/types/CompanyNode"

describe('Fetching COMPANY node from data source', () => {
    test('when there is no COMPANY', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getCompanyById(12345678))
            .toEqual(null)
    })

    test('when there is a COMPANY', async () => {
        const apiResponse = {
            type: ApiNodeType.COMPANY,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiCompanyNode

        const expectedDataNode = {
            type: DataNodeType.COMPANY,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as CompanyNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getCompanyById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
