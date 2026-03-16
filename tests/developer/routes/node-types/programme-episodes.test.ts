import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/programme-episodes/displayAllNodes"

describe('Programme Episodes', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/programme-episodes/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/programme-episodes')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
