import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/programmes/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/programmes/displayNode"

describe('Programmes', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/programmes/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/programmes')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/programmes/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/programmes/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
