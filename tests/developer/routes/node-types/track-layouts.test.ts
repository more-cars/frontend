import {describe, expect, test, vi} from "vitest"
import {displayAllNodes} from "../../../../src/controllers/node-types/track-layouts/displayAllNodes"
import {supertestGet} from "../../supertestGet"

describe('Track Layouts', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/track-layouts/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/track-layouts')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
