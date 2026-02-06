import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedLapTimes} from "../../../../../src/models/node-types/car-model-variants/findConnectedLapTimes"
import {
    CarModelVariantAchievedLapTimeRelationship
} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantAchievedLapTimeRelationship"

describe('Collect connected LAP TIMES for the CAR MODEL VARIANT detail page', () => {
    test('when no LAP TIMES are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedLapTimeNodes').mockResolvedValue([])

        expect(await findConnectedLapTimes(1))
            .toHaveLength(0)
    })

    test('when there are LAP TIMES connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedLapTimeNodes').mockResolvedValue([
            {
                id: 2,
                name: "dummy 2",
                partner_node: {driver_name: "dummy"}
            } as unknown as CarModelVariantAchievedLapTimeRelationship,
            {
                id: 3,
                name: "dummy 3",
                partner_node: {driver_name: "dummy"}
            } as unknown as CarModelVariantAchievedLapTimeRelationship,
        ])

        expect(await findConnectedLapTimes(1))
            .toHaveLength(2)
    })
})
