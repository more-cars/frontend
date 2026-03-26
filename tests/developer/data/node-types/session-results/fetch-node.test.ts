import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getSessionResultById} from "../../../../../src/data/node-types/session-results/getSessionResultById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiSessionResultNode} from "../../../../../src/data/node-types/session-results/types/ApiSessionResultNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {SessionResultNode} from "../../../../../src/data/node-types/session-results/types/SessionResultNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching SESSION RESULT node from data source', () => {
    test('when there is no SESSION RESULT', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getSessionResultById(12345678))
            .toEqual(null)
    })

    test('when there is a SESSION RESULT', async () => {
        const apiResponse = {
            type: ApiNodeType.SESSION_RESULT,
            id: 12345678,
            attributes: {
                position: 1,
            },
        } as ApiSessionResultNode

        const expectedDataNode = {
            type: DataNodeType.SESSION_RESULT,
            data: {
                id: 12345678,
                position: 1,
            },
        } as SessionResultNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getSessionResultById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
