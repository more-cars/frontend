import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/lap-times/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/lap-times/displayNode"

describe('Lap Times', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/lap-times/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/lap-times')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/lap-times/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/lap-times/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
