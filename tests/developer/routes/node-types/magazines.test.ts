import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/magazines/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/magazines/displayNode"

describe('Magazines', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/magazines/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/magazines')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/magazines/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/magazines/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
