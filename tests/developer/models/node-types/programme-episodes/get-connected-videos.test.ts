import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/programme-episodes/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {ProgrammeEpisodeHasVideoRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeHasVideoRelationship"

describe('Collect connected VIDEOS for the PROGRAMME EPISODE detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as ProgrammeEpisodeHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as ProgrammeEpisodeHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
