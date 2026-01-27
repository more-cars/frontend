import {describe, expect, test, vi} from "vitest"
import {displayAllNodes} from "../../../../src/controllers/node-types/race-tracks/displayAllNodes"
import {supertestGet} from "../../supertestGet"

describe('Race Tracks', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/race-tracks/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/race-tracks')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
