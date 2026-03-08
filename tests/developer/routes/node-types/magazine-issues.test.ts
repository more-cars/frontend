import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/magazine-issues/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/magazine-issues/displayNode"

describe('Magazine Issues', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/magazine-issues/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/magazine-issues')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/magazine-issues/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/magazine-issues/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
