import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/racing-sessions/displayAllNodes"

describe('Racing Sessions', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/racing-sessions/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/racing-sessions')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
