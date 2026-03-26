import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../../src/data/CarModelDataFacade"
import {findConnectedProgrammeEpisodes} from "../../../../../src/models/node-types/car-models/findConnectedProgrammeEpisodes"
import {CarModelCoveredByProgrammeEpisodeRelationship} from "../../../../../src/data/node-types/car-models/types/CarModelCoveredByProgrammeEpisodeRelationship"
import {FakeProgrammeEpisode} from "../../../../_toolbox/fixtures/node-types/FakeProgrammeEpisode"

describe('Collect connected PROGRAMME EPISODES for the CAR MODEL detail page', () => {
    test('when no PROGRAMME EPISODES are connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedProgrammeEpisodeNodes').mockResolvedValue([])

        expect(await findConnectedProgrammeEpisodes(12345678))
            .toHaveLength(0)
    })

    test('when there are PROGRAMME EPISODES connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedProgrammeEpisodeNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeProgrammeEpisode.data} as unknown as CarModelCoveredByProgrammeEpisodeRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeProgrammeEpisode.data} as unknown as CarModelCoveredByProgrammeEpisodeRelationship,
        ])

        expect(await findConnectedProgrammeEpisodes(12345678))
            .toHaveLength(2)
    })
})
