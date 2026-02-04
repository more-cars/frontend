import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/session-results/displayAllNodes"

describe('Session Results', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/session-results/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/session-results')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
