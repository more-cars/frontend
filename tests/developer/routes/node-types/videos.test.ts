import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/videos/displayAllNodes"
import {supertestGet} from "../../supertestGet"

describe('Videos', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/videos')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
