import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/lap-times/findConnectedCarModelVariant"
import {LapTimeAchievedWithCarModelVariantRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeAchievedWithCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANT for the LAP TIME detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as LapTimeAchievedWithCarModelVariantRelationship
        vi.spyOn(LapTimeDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(1))
            .toHaveProperty('id', 1)
    })
})
