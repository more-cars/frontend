import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedSuccessor} from "../../../../../src/models/node-types/programme-episodes/findConnectedSuccessor"
import {FakeProgrammeEpisode} from "../../../../_toolbox/fixtures/node-types/FakeProgrammeEpisode"
import {ProgrammeEpisodeIsFollowedByEpisodeRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeIsFollowedByEpisodeRelationship"

describe('Collect connected SUCCESSOR for the PROGRAMME EPISODE detail page', () => {
    test('when no SUCCESSOR is connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(null)

        expect(await findConnectedSuccessor(12345678))
            .toEqual(null)
    })

    test('when there is a SUCCESSOR connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeProgrammeEpisode.data} as unknown as ProgrammeEpisodeIsFollowedByEpisodeRelationship

        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(data)

        expect(await findConnectedSuccessor(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
