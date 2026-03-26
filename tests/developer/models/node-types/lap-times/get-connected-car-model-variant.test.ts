import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/lap-times/findConnectedCarModelVariant"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import {LapTimeAchievedWithCarModelVariantRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeAchievedWithCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANT for the LAP TIME detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCarModelVariant.data} as unknown as LapTimeAchievedWithCarModelVariantRelationship

        vi.spyOn(LapTimeDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
