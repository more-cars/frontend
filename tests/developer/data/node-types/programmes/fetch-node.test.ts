import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getProgrammeById} from "../../../../../src/data/node-types/programmes/getProgrammeById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiProgrammeNode} from "../../../../../src/data/node-types/programmes/types/ApiProgrammeNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {ProgrammeNode} from "../../../../../src/data/node-types/programmes/types/ProgrammeNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching PROGRAMME node from data source', () => {
    test('when there is no PROGRAMME', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getProgrammeById(12345678))
            .toEqual(null)
    })

    test('when there is a PROGRAMME', async () => {
        const apiResponse = {
            type: ApiNodeType.PROGRAMME,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiProgrammeNode

        const expectedDataNode = {
            type: DataNodeType.PROGRAMME,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as ProgrammeNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getProgrammeById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
