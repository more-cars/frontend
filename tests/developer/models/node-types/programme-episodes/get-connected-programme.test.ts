import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedProgramme} from "../../../../../src/models/node-types/programme-episodes/findConnectedProgramme"
import {ProgrammeEpisodeBelongsToProgrammeRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeBelongsToProgrammeRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected PROGRAMME for the PROGRAMME EPISODE detail page', () => {
    test('when no PROGRAMME is connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedProgrammeNode').mockResolvedValue(null)

        expect(await findConnectedProgramme(1))
            .toEqual(null)
    })

    test('when there is a PROGRAMME connected', async () => {
        const data = {partner_node: {type: DataNodeType.PROGRAMME, data: {id: 1, name: "dummy"}}} as ProgrammeEpisodeBelongsToProgrammeRelationship
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedProgrammeNode').mockResolvedValue(data)

        expect(await findConnectedProgramme(1))
            .toHaveProperty('id', 1)
    })
})
