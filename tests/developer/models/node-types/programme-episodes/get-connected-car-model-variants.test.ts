import {describe, expect, test, vi} from "vitest"
import {ProgrammeEpisodeDataFacade} from "../../../../../src/data/ProgrammeEpisodeDataFacade"
import {findConnectedCarModelVariants} from "../../../../../src/models/node-types/programme-episodes/findConnectedCarModelVariants"
import {ProgrammeEpisodeFeaturesCarModelVariantRelationship} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeFeaturesCarModelVariantRelationship"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"

describe('Collect connected CAR MODEL VARIANTS for the PROGRAMME EPISODE detail page', () => {
    test('when no CAR MODEL VARIANTS are connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })

    test('when there are CAR MODEL VARIANTS connected', async () => {
        vi.spyOn(ProgrammeEpisodeDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeCarModelVariant.data} as unknown as ProgrammeEpisodeFeaturesCarModelVariantRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeCarModelVariant.data} as unknown as ProgrammeEpisodeFeaturesCarModelVariantRelationship,
        ])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(2)
    })
})
