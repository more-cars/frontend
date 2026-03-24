import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/model-cars/findConnectedCarModelVariant"
import {ModelCarIsScaleModelOfCarModelVariantRelationship} from "../../../../../src/data/node-types/model-cars/types/ModelCarIsScaleModelOfCarModelVariantRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected CAR MODEL VARIANT for the MODEL CAR detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {partner_node: {type: DataNodeType.CAR_MODEL_VARIANT, data: {id: 1, name: "dummy"}}} as ModelCarIsScaleModelOfCarModelVariantRelationship
        vi.spyOn(ModelCarDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(1))
            .toHaveProperty('id', 1)
    })
})
