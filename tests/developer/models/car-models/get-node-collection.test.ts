import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findAllNodes} from "../../../../src/models/car-models/findAllNodes"
import type {CarModelNode} from "../../../../src/data/car-models/types/CarModelNode"

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
})
