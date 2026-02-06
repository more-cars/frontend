import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/car-model-variants/displayAllNodes"

describe('Car Model Variants', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/car-model-variants/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/car-model-variants')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
