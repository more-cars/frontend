import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/racing-events/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/racing-events/displayNode"

describe('Racing Events', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/racing-events/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/racing-events')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/racing-events/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/racing-events/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
