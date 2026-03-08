import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/gaming-platforms/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/gaming-platforms/displayNode"

describe('Gaming Platforms', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/gaming-platforms/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/gaming-platforms')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/gaming-platforms/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/gaming-platforms/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
