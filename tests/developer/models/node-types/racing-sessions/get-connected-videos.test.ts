import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/racing-sessions/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {RacingSessionHasVideoRelationship} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionHasVideoRelationship"

describe('Collect connected VIDEOS for the RACING SESSION detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as RacingSessionHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as RacingSessionHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
