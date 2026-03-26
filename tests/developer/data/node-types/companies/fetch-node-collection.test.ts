import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllCompanies} from "../../../../../src/data/node-types/companies/getAllCompanies"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiCompanyNode} from "../../../../../src/data/node-types/companies/types/ApiCompanyNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching COMPANY collection from data source', () => {
    test('when there are no COMPANIES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCompanies())
            .toHaveLength(0)
    })

    test('when there are multiple COMPANIES', async () => {
        const node = {type: ApiNodeType.COMPANY} as ApiCompanyNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCompanies())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCompanies())
            .toHaveLength(0)
    })
})
