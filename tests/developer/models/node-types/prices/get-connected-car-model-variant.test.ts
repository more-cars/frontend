import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/prices/findConnectedCarModelVariant"
import {PriceForCarModelVariantRelationship} from "../../../../../src/data/node-types/prices/types/PriceForCarModelVariantRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected CAR MODEL VARIANT for the PRICE detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(PriceDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {partner_node: {type: DataNodeType.CAR_MODEL_VARIANT, data: {id: 1, name: "dummy"}}} as PriceForCarModelVariantRelationship
        vi.spyOn(PriceDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(1))
            .toHaveProperty('id', 1)
    })
})
