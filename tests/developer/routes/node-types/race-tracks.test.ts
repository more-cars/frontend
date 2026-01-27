import {describe, expect, test, vi} from "vitest"
import {displayAllNodes} from "../../../../src/controllers/node-types/race-tracks/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import {displayNode} from "../../../../src/controllers/node-types/race-tracks/displayNode"

describe('Race Tracks', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/race-tracks/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/race-tracks')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/race-tracks/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/race-tracks/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
