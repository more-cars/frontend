import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllProgrammes} from "../../../../../src/data/node-types/programmes/getAllProgrammes"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiProgrammeNode} from "../../../../../src/data/node-types/programmes/types/ApiProgrammeNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching PROGRAMME collection from data source', () => {
    test('when there are no PROGRAMMES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllProgrammes())
            .toHaveLength(0)
    })

    test('when there are multiple PROGRAMMES', async () => {
        const node = {type: ApiNodeType.PROGRAMME} as ApiProgrammeNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllProgrammes())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllProgrammes())
            .toHaveLength(0)
    })
})
