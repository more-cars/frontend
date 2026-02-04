import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/session-results/displayAllNodes"
import {displayNode} from "../../../../src/controllers/node-types/session-results/displayNode"

describe('Session Results', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/session-results/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/session-results')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/session-results/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/session-results/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
