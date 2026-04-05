import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/racing-games/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {RacingGameHasVideoRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameHasVideoRelationship"

describe('Collect connected VIDEOS for the RACING GAME detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as RacingGameHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as RacingGameHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
