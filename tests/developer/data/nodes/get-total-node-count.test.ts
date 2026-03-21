import {afterEach, describe, expect, test, vi} from "vitest"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import {getAllDataNodeTypes} from "../../../_toolbox/getAllDataNodeTypes"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching total node count', () => {
    test.each(getAllDataNodeTypes())('when there is no $0 node', async (nodeType) => {
        const responseData = {
            data: [],
            meta: {
                page: {
                    total_nodes: 0,
                },
            },
        }
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getTotalNodeCount} = await import("../../../../src/data/nodes/getTotalNodeCount")
        expect(await getTotalNodeCount(nodeType))
            .toEqual(0)
    })

    test.each(getAllDataNodeTypes())('when there are $0 nodes and they are all returned', async (nodeType) => {
        const responseData = {
            data: [{}, {}, {}],
            meta: {
                page: {
                    total_nodes: 3,
                },
            },
        }
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getTotalNodeCount} = await import("../../../../src/data/nodes/getTotalNodeCount")
        expect(await getTotalNodeCount(nodeType))
            .toEqual(3)
    })

    test.each(getAllDataNodeTypes())('when there are more $0 nodes in total than actually returned', async (nodeType) => {
        const responseData = {
            data: [{}, {}, {}],
            meta: {
                page: {
                    total_nodes: 17,
                },
            },
        }
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getTotalNodeCount} = await import("../../../../src/data/nodes/getTotalNodeCount")
        expect(await getTotalNodeCount(nodeType))
            .toEqual(17)
    })

    test('when there is a network error', async () => {
        const responseData = null
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getTotalNodeCount} = await import("../../../../src/data/nodes/getTotalNodeCount")
        expect(await getTotalNodeCount(DataNodeType.BRAND))
            .toEqual(-1)
    })
})
