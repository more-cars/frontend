import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/model-car-brands/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/model-car-brands/displayNode"

describe('Model Car Brands', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/model-car-brands/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/model-car-brands')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/model-car-brands/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/model-car-brands/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
