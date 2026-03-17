import {describe, expect, test, vi} from "vitest"
import {MotorShowDataFacade} from "../../../../../src/data/MotorShowDataFacade"
import {findConnectedCarModelVariants} from "../../../../../src/models/node-types/motor-shows/findConnectedCarModelVariants"
import {MotorShowPresentsCarModelVariantRelationship} from "../../../../../src/data/node-types/motor-shows/types/MotorShowPresentsCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANTS for the MOTOR SHOW detail page', () => {
    test('when no CAR MODEL VARIANTS are connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([])

        expect(await findConnectedCarModelVariants(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODEL VARIANTS connected', async () => {
        vi.spyOn(MotorShowDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as MotorShowPresentsCarModelVariantRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as MotorShowPresentsCarModelVariantRelationship,
        ])

        expect(await findConnectedCarModelVariants(1))
            .toHaveLength(2)
    })
})
