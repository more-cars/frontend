import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {
    findConnectedSessionResults
} from "../../../../../src/models/node-types/car-model-variants/findConnectedSessionResults"
import {
    CarModelVariantAchievedSessionResultRelationship
} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantAchievedSessionResultRelationship"

describe('Collect connected SESSION RESULTS for the CAR MODEL VARIANT detail page', () => {
    test('when no SESSION RESULTS are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedSessionResultNodes').mockResolvedValue([])

        expect(await findConnectedSessionResults(1))
            .toHaveLength(0)
    })

    test('when there are SESSION RESULTS connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedSessionResultNodes').mockResolvedValue([
            {
                id: 2,
                driver_name: "dummy 2",
                partner_node: {}
            } as unknown as CarModelVariantAchievedSessionResultRelationship,
            {
                id: 3,
                driver_name: "dummy 3",
                partner_node: {}
            } as unknown as CarModelVariantAchievedSessionResultRelationship,
        ])

        expect(await findConnectedSessionResults(1))
            .toHaveLength(2)
    })
})
