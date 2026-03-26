import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../../src/data/CarModelDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/car-models/findAllNodes"
import type {CarModelNode} from "../../../../../src/data/node-types/car-models/types/CarModelNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the CAR MODEL overview page', () => {
    test('when there exist no CAR MODELS', async () => {
        vi.spyOn(CarModelDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple CAR MODELS', async () => {
        vi.spyOn(CarModelDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.CAR_MODEL, data: {id: 11111118, name: "dummy 1"}} as CarModelNode,
            {type: DataNodeType.CAR_MODEL, data: {id: 12222228, name: "dummy 2"}} as CarModelNode,
            {type: DataNodeType.CAR_MODEL, data: {id: 13333338, name: "dummy 3"}} as CarModelNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 CAR MODELS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.CAR_MODEL, data: {id: i, name: "dummy " + i}} as CarModelNode)
        }

        vi.spyOn(CarModelDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
