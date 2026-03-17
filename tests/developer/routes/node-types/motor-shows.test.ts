import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {displayAllNodes} from "../../../../src/controllers/node-types/motor-shows/displayAllNodes"

describe('Motor Shows', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/motor-shows/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/motor-shows')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
