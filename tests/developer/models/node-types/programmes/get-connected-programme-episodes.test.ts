import {describe, expect, test, vi} from "vitest"
import {ProgrammeDataFacade} from "../../../../../src/data/ProgrammeDataFacade"
import {findConnectedProgrammeEpisodes} from "../../../../../src/models/node-types/programmes/findConnectedProgrammeEpisodes"
import {ProgrammeHasEpisodeRelationship} from "../../../../../src/data/node-types/programmes/types/ProgrammeHasEpisodeRelationship"

describe('Collect connected PROGRAMME EPISODES for the PROGRAMME detail page', () => {
    test('when no PROGRAMME EPISODES are connected', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getConnectedProgrammeEpisodeNodes').mockResolvedValue([])

        expect(await findConnectedProgrammeEpisodes(1))
            .toHaveLength(0)
    })

    test('when there are PROGRAMME EPISODES connected', async () => {
        vi.spyOn(ProgrammeDataFacade, 'getConnectedProgrammeEpisodeNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as ProgrammeHasEpisodeRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as ProgrammeHasEpisodeRelationship,
        ])

        expect(await findConnectedProgrammeEpisodes(1))
            .toHaveLength(2)
    })
})
