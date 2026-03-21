import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/model-car-brands/findAllNodes"
import type {ModelCarBrandNode} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandNode"

describe('Collect node collection for the MODEL CAR BRAND overview page', () => {
    test('when there exist no MODEL CAR BRANDS', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple MODEL CAR BRANDS', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as ModelCarBrandNode,
            {id: 2, name: "dummy 2"} as ModelCarBrandNode,
            {id: 3, name: "dummy 3"} as ModelCarBrandNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 MODEL CAR BRANDS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as ModelCarBrandNode)
        }

        vi.spyOn(ModelCarBrandDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
