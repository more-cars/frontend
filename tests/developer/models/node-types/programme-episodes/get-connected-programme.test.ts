import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedProgramme} from "../../../../../src/models/node-types/programme-episodes/findConnectedProgramme"
import {FakeProgramme} from "../../../../_toolbox/fixtures/node-types/FakeProgramme"
import {ProgrammeEpisodeBelongsToProgrammeRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeBelongsToProgrammeRelationship"

describe('Collect connected PROGRAMME for the PROGRAMME EPISODE detail page', () => {
    test('when no PROGRAMME is connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedProgrammeNode').mockResolvedValue(null)

        expect(await findConnectedProgramme(12345678))
            .toEqual(null)
    })

    test('when there is a PROGRAMME connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeProgramme.data} as unknown as ProgrammeEpisodeBelongsToProgrammeRelationship

        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedProgrammeNode').mockResolvedValue(data)

        expect(await findConnectedProgramme(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
