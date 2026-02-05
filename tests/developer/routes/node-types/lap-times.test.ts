import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/lap-times/displayAllNodes"

describe('Lap Times', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/lap-times/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/lap-times')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
