import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/racing-games/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/racing-games/displayNode"

describe('Racing Games', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/racing-games/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/racing-games')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/racing-games/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/racing-games/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
