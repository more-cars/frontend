import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/magazines/displayAllNodes"

describe('Magazines', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/magazines/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/magazines')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
