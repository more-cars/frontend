import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/car-model-variants/findAllNodes"
import type {CarModelVariantNode} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the CAR MODEL VARIANT overview page', () => {
    test('when there exist no CAR MODEL VARIANTS', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple CAR MODEL VARIANTS', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.CAR_MODEL_VARIANT, data: {id: 1, name: "dummy 1"}} as CarModelVariantNode,
            {type: DataNodeType.CAR_MODEL_VARIANT, data: {id: 2, name: "dummy 2"}} as CarModelVariantNode,
            {type: DataNodeType.CAR_MODEL_VARIANT, data: {id: 3, name: "dummy 3"}} as CarModelVariantNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 CAR MODEL VARIANTS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.CAR_MODEL_VARIANT, data: {id: i, name: "dummy " + i}} as CarModelVariantNode)
        }

        vi.spyOn(CarModelVariantDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
