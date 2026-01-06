import {describe, expect, test, vi} from "vitest"
import {displayAllNodes} from "../../../../src/controllers/node-types/images/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/images/displayNode"
import {supertestGet} from "../../supertestGet"

describe('Images', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/images/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/images')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/images/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/images/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
