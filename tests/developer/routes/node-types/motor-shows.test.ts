import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/motor-shows/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import {displayNode} from "../../../../src/controllers/node-types/motor-shows/displayNode"

describe('Motor Shows', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/motor-shows')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/motor-shows/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/motor-shows/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
