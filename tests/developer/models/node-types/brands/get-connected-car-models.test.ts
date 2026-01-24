import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../../src/data/BrandDataFacade"
import {findConnectedCarModels} from "../../../../../src/models/node-types/brands/findConnectedCarModels"
import type {
    BrandHasCarModelRelationship
} from "../../../../../src/data/node-types/brands/types/BrandHasCarModelRelationship"

describe('Collect connected CAR MODELS for the BRAND detail page', () => {
    test('when no CAR MODELS are connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([])

        expect(await findConnectedCarModels(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODELS connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedCarModelNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as BrandHasCarModelRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as BrandHasCarModelRelationship,
        ])

        expect(await findConnectedCarModels(1))
            .toHaveLength(2)
    })
})
