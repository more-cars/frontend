import {describe, expect, test, vi} from "vitest"
import {displayAllNodes} from "../../../../src/controllers/node-types/car-models/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/car-models/displayNode"
import {supertestGet} from "../../supertestGet"

describe('Car Models', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/car-models/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/car-models')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/car-models/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/car-models/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
