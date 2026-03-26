import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedProgrammeEpisodes} from "../../../../../src/models/node-types/car-model-variants/findConnectedProgrammeEpisodes"
import {
    CarModelVariantFeaturedInProgrammeEpisodeRelationship
} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantFeaturedInProgrammeEpisodeRelationship"
import {FakeProgrammeEpisode} from "../../../../_toolbox/fixtures/node-types/FakeProgrammeEpisode"

describe('Collect connected PROGRAMME EPISODES for the CAR MODEL VARIANT detail page', () => {
    test('when no PROGRAMME EPISODES are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedProgrammeEpisodeNodes').mockResolvedValue([])

        expect(await findConnectedProgrammeEpisodes(12345678))
            .toHaveLength(0)
    })

    test('when there are PROGRAMME EPISODES connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedProgrammeEpisodeNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeProgrammeEpisode.data} as unknown as CarModelVariantFeaturedInProgrammeEpisodeRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeProgrammeEpisode.data} as unknown as CarModelVariantFeaturedInProgrammeEpisodeRelationship,
        ])

        expect(await findConnectedProgrammeEpisodes(12345678))
            .toHaveLength(2)
    })
})
