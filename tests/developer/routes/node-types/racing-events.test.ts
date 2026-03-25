import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/racing-events/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import {displayNode} from "../../../../src/controllers/node-types/racing-events/displayNode"

describe('Racing Events', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/racing-events')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/racing-events/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/racing-events/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
