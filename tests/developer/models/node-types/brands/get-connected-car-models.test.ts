import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../../src/data/BrandDataFacade"
import {findConnectedCarModels} from "../../../../../src/models/node-types/brands/findConnectedCarModels"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import type {BrandHasCarModelRelationship} from "../../../../../src/data/node-types/brands/types/BrandHasCarModelRelationship"

describe('Collect connected CAR MODELS for the BRAND detail page', () => {
    test('when no CAR MODELS are connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([])

        expect(await findConnectedCarModels(12345678))
            .toHaveLength(0)
    })

    test('when there are CAR MODELS connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeCarModel.data} as unknown as BrandHasCarModelRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeCarModel.data} as unknown as BrandHasCarModelRelationship,
        ])

        expect(await findConnectedCarModels(12345678))
            .toHaveLength(2)
    })
})
