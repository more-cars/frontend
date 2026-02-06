import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/car-model-variants/findAllNodes"
import type {CarModelVariantNode} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantNode"

describe('Collect node collection for the CAR MODEL VARIANT overview page', () => {
    test('when there exist no CAR MODEL VARIANTS', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple CAR MODEL VARIANTS', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as CarModelVariantNode,
            {id: 2, name: "dummy 2"} as CarModelVariantNode,
            {id: 3, name: "dummy 3"} as CarModelVariantNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 CAR MODEL VARIANTS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as CarModelVariantNode)
        }

        vi.spyOn(CarModelVariantDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
