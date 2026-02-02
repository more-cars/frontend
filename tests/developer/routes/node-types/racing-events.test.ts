import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/racing-events/displayAllNodes"

describe('Racing Events', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/racing-events/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/racing-events')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
