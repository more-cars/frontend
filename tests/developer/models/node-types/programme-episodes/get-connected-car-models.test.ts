import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedCarModels} from "../../../../../src/models/node-types/programme-episodes/findConnectedCarModels"
import {ProgrammeEpisodeCoversCarModelRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeCoversCarModelRelationship"

describe('Collect connected CAR MODELS for the PROGRAMME EPISODE detail page', () => {
    test('when no CAR MODELS are connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([])

        expect(await findConnectedCarModels(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODELS connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as ProgrammeEpisodeCoversCarModelRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as ProgrammeEpisodeCoversCarModelRelationship,
        ])

        expect(await findConnectedCarModels(1))
            .toHaveLength(2)
    })
})
