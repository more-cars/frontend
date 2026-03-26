import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/model-car-brands/findAllNodes"
import type {ModelCarBrandNode} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the MODEL CAR BRAND overview page', () => {
    test('when there exist no MODEL CAR BRANDS', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple MODEL CAR BRANDS', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.MODEL_CAR_BRAND, data: {id: 11111118, name: "dummy 1"}} as ModelCarBrandNode,
            {type: DataNodeType.MODEL_CAR_BRAND, data: {id: 12222228, name: "dummy 2"}} as ModelCarBrandNode,
            {type: DataNodeType.MODEL_CAR_BRAND, data: {id: 13333338, name: "dummy 3"}} as ModelCarBrandNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 MODEL CAR BRANDS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.MODEL_CAR_BRAND, data: {id: i, name: "dummy " + i}} as ModelCarBrandNode)
        }

        vi.spyOn(ModelCarBrandDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
