import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/magazine-issues/displayAllNodes"

describe('Magazine Issues', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/magazine-issues/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/magazine-issues')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
