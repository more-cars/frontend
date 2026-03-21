import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/model-car-brands/findNodeById"
import type {ModelCarBrandNode} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandNode"

describe('Collect node for the MODEL CAR BRAND detail page', () => {
    test('when the MODEL CAR BRAND does not exist', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the MODEL CAR BRAND exists', async () => {
        const node = {id: 1, name: "dummy 1"} as ModelCarBrandNode
        vi.spyOn(ModelCarBrandDataFacade, 'getNodeById').mockResolvedValue(node)

        const modelCarBrand = await findNodeById(1)

        expect(modelCarBrand?.id).toEqual(node.id)
        expect(modelCarBrand?.name).toEqual(node.name)
    })
})
