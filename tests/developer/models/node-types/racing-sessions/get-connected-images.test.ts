import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/racing-sessions/findConnectedImages"
import {RacingSessionHasImageRelationship} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionHasImageRelationship"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"

describe('Collect connected IMAGES for the RACING SESSION detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeImage.data} as unknown as RacingSessionHasImageRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeImage.data} as unknown as RacingSessionHasImageRelationship,
        ])

        expect(await findConnectedImages(12345678))
            .toHaveLength(2)
    })
})
