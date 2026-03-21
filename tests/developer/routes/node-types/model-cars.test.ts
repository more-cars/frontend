import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/model-cars/displayAllNodes"

describe('Model Cars', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/model-cars/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/model-cars')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
