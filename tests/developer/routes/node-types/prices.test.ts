import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/prices/displayAllNodes"

describe('Prices', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/prices/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/prices')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
