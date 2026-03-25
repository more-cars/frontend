import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/track-layouts/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import {displayNode} from "../../../../src/controllers/node-types/track-layouts/displayNode"

describe('Track Layouts', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/track-layouts')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/track-layouts/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/track-layouts/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
