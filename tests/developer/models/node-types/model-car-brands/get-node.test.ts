import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/model-car-brands/findNodeById"
import type {ModelCarBrandNode} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the MODEL CAR BRAND detail page', () => {
    test('when the MODEL CAR BRAND does not exist', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the MODEL CAR BRAND exists', async () => {
        const node = {type: DataNodeType.MODEL_CAR_BRAND, data: {id: 11111118, name: "dummy 1"}} as ModelCarBrandNode
        vi.spyOn(ModelCarBrandDataFacade, 'getNodeById').mockResolvedValue(node)

        const modelCarBrand = await findNodeById(11111118)

        expect(modelCarBrand?.fields.id).toEqual(node.data.id)
        expect(modelCarBrand?.fields.name).toEqual(node.data.name)
    })
})
