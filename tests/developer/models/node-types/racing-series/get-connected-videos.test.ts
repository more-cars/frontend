import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/racing-series/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {RacingSeriesHasVideoRelationship} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesHasVideoRelationship"

describe('Collect connected VIDEOS for the RACING SERIES detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as RacingSeriesHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as RacingSeriesHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
