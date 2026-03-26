import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getLapTimeById} from "../../../../../src/data/node-types/lap-times/getLapTimeById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiLapTimeNode} from "../../../../../src/data/node-types/lap-times/types/ApiLapTimeNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {LapTimeNode} from "../../../../../src/data/node-types/lap-times/types/LapTimeNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching LAP TIME node from data source', () => {
    test('when there is no LAP TIME', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getLapTimeById(12345678))
            .toEqual(null)
    })

    test('when there is a LAP TIME', async () => {
        const apiResponse = {
            type: ApiNodeType.LAP_TIME,
            id: 12345678,
            attributes: {
                time: "dummy",
            },
        } as ApiLapTimeNode

        const expectedDataNode = {
            type: DataNodeType.LAP_TIME,
            data: {
                id: 12345678,
                time: "dummy",
            },
        } as LapTimeNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getLapTimeById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
