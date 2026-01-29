import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/track-layouts/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/track-layouts/displayNode"

describe('Track Layouts', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/track-layouts/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/track-layouts')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/track-layouts/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/track-layouts/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
