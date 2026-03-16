import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/programme-episodes/findConnectedImages"
import {ProgrammeEpisodeHasImageRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeHasImageRelationship"

describe('Collect connected IMAGES for the PROGRAMME EPISODE detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as ProgrammeEpisodeHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as ProgrammeEpisodeHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
