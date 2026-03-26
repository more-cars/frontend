import {afterEach, describe, expect, test, vi} from "vitest"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import * as api from "../../../../src/data/requestDataFromApi"
import {getTotalNodeCount} from "../../../../src/data/nodes/getTotalNodeCount"
import {convertStringToDataNodeType} from "../../../_toolbox/convertStringToNodeType"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching total node count', () => {
    test.each(
        getAllExpectedNodeTypes()
    )('when there is no $0 node', async (nodeType) => {
        const responseData = {
            data: [],
            meta: {
                page: {
                    total_nodes: 0,
                },
            },
        }

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (responseData))

        expect(await getTotalNodeCount(convertStringToDataNodeType(nodeType)))
            .toEqual(0)
    })

    test.each(
        getAllExpectedNodeTypes()
    )('when there are $0 nodes and they are all returned', async (nodeType) => {
        const responseData = {
            data: [{}, {}, {}],
            meta: {
                page: {
                    total_nodes: 3,
                },
            },
        }

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (responseData))

        expect(await getTotalNodeCount(convertStringToDataNodeType(nodeType)))
            .toEqual(3)
    })

    test.each(
        getAllExpectedNodeTypes()
    )('when there are more $0 nodes in total than actually returned', async (nodeType) => {
        const responseData = {
            data: [{}, {}, {}],
            meta: {
                page: {
                    total_nodes: 17,
                },
            },
        }

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (responseData))

        expect(await getTotalNodeCount(convertStringToDataNodeType(nodeType)))
            .toEqual(17)
    })

    test('when there is a network error', async () => {
        const responseData = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (responseData))

        expect(await getTotalNodeCount(DataNodeType.BRAND))
            .toEqual(-1)
    })
})
