import {describe, expect, test, vi} from "vitest"
import {displayAllNodes} from "../../../../src/controllers/node-types/brands/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/brands/displayNode"
import {supertestGet} from "../../supertestGet"

describe('Brands', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/brands/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/brands')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/brands/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/brands/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
