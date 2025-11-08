import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findAllNodes} from "../../../../src/models/node-types/car-models/findAllNodes"
import type {CarModelNode} from "../../../../src/data/node-types/car-models/types/CarModelNode"

describe('Collect node collection for the CAR MODEL overview page', () => {
    test('when there exist no CAR MODELS', async () => {
        vi.spyOn(CarModelDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple CAR MODELS', async () => {
        vi.spyOn(CarModelDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as CarModelNode,
            {id: 2, name: "dummy 2"} as CarModelNode,
            {id: 3, name: "dummy 3"} as CarModelNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 CAR MODELS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as CarModelNode)
        }

        vi.spyOn(CarModelDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
