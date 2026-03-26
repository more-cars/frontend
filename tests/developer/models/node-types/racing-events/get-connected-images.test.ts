import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/racing-events/findConnectedImages"
import {RacingEventHasImageRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventHasImageRelationship"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"

describe('Collect connected IMAGES for the RACING EVENT detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeImage.data} as unknown as RacingEventHasImageRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeImage.data} as unknown as RacingEventHasImageRelationship,
        ])

        expect(await findConnectedImages(12345678))
            .toHaveLength(2)
    })
})
