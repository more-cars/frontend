import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/companies/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/companies/displayNode"

describe('Companies', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/companies/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/companies')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/companies/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/companies/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
