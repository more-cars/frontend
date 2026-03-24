import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/model-cars/findAllNodes"
import type {ModelCarNode} from "../../../../../src/data/node-types/model-cars/types/ModelCarNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the MODEL CAR overview page', () => {
    test('when there exist no MODEL CARS', async () => {
        vi.spyOn(ModelCarDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple MODEL CARS', async () => {
        vi.spyOn(ModelCarDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.MODEL_CAR, data: {id: 1, name: "dummy 1"}} as ModelCarNode,
            {type: DataNodeType.MODEL_CAR, data: {id: 2, name: "dummy 2"}} as ModelCarNode,
            {type: DataNodeType.MODEL_CAR, data: {id: 3, name: "dummy 3"}} as ModelCarNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 MODEL CARS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.MODEL_CAR, data: {id: i, name: "dummy " + i}} as ModelCarNode)
        }

        vi.spyOn(ModelCarDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
