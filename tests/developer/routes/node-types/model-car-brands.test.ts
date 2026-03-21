import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/model-car-brands/displayAllNodes"

describe('Model Car Brands', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/model-car-brands/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/model-car-brands')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
