import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../src/data/BrandDataFacade"
import {findConnectedCarModels} from "../../../../src/models/brands/findConnectedCarModels"

describe('Collect connected CAR MODELS for the BRAND detail page', () => {
    test('when no CAR MODELS are connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedCarModelNodes').mockResolvedValue(false)

        expect(await findConnectedCarModels(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODELS connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([
            {data: {relationship_id: 2, relationship_name: "dummy 1", relationship_partner: {}}},
            {data: {relationship_id: 3, relationship_name: "dummy 2", relationship_partner: {}}},
        ])

        expect(await findConnectedCarModels(1))
            .toHaveLength(2)
    })
})
