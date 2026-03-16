import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedPredecessor} from "../../../../../src/models/node-types/programme-episodes/findConnectedPredecessor"
import {ProgrammeEpisodeFollowsEpisodeRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeFollowsEpisodeRelationship"

describe('Collect connected PROGRAMME EPISODE for the PROGRAMME EPISODE detail page', () => {
    test('when no PROGRAMME EPISODE is connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(null)

        expect(await findConnectedPredecessor(1))
            .toEqual(null)
    })

    test('when there is a PROGRAMME EPISODE connected', async () => {
        const data = {partner_node: {id: 1, title: "dummy"}} as ProgrammeEpisodeFollowsEpisodeRelationship
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(data)

        expect(await findConnectedPredecessor(1))
            .toHaveProperty('id', 1)
    })
})
