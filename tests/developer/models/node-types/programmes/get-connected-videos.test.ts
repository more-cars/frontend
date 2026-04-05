import {describe, expect, test, vi} from "vitest"
import {ProgrammeDataFacade} from "../../../../../src/data/ProgrammeDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/programmes/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {ProgrammeHasVideoRelationship} from "../../../../../src/data/node-types/programmes/types/ProgrammeHasVideoRelationship"

describe('Collect connected VIDEOS for the PROGRAMME detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as ProgrammeHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as ProgrammeHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
