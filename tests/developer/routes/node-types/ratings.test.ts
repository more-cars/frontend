import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/ratings/displayAllNodes"

describe('Ratings', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/ratings/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/ratings')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
