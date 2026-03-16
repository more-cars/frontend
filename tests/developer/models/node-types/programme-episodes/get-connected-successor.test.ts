import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedSuccessor} from "../../../../../src/models/node-types/programme-episodes/findConnectedSuccessor"
import {ProgrammeEpisodeIsFollowedByEpisodeRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeIsFollowedByEpisodeRelationship"

describe('Collect connected SUCCESSOR for the PROGRAMME EPISODE detail page', () => {
    test('when no SUCCESSOR is connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(null)

        expect(await findConnectedSuccessor(1))
            .toEqual(null)
    })

    test('when there is a SUCCESSOR connected', async () => {
        const data = {partner_node: {id: 1, title: "dummy"}} as ProgrammeEpisodeIsFollowedByEpisodeRelationship
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(data)

        expect(await findConnectedSuccessor(1))
            .toHaveProperty('id', 1)
    })
})
